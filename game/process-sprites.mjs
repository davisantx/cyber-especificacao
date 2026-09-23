import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const TARGET_WIDTH = 896;
const TARGET_HEIGHT = 1200;

export async function processSprite(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4

  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackground(x, y) {
    const idx = (y * width + x) * channels;
    const a = data[idx + 3];
    if (a === 0) return true;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r > 240 && g > 240 && b > 240;
  }

  function add(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const pos = y * width + x;
    if (visited[pos]) return;
    visited[pos] = 1;
    if (isBackground(x, y)) {
      queue.push(pos);
    }
  }

  // Seed with all border pixels
  for (let x = 0; x < width; x++) {
    add(x, 0);
    add(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    add(0, y);
    add(width - 1, y);
  }

  // Extra manual seeds for enclosed background pockets (e.g., between arm and body/head)
  const baseName = path.parse(inputPath).name;
  const EXTRA_SEEDS = {
    'leo_doubtful': [{ x: 610, y: 350 }],
    'socorro_firm_witness': [{ x: 650, y: 900 }],
    'raimundo_observant': [{ x: 260, y: 940 }]
  };
  if (EXTRA_SEEDS[baseName]) {
    for (const seed of EXTRA_SEEDS[baseName]) {
      add(seed.x, seed.y);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const pos = queue[head++];
    const x = pos % width;
    const y = Math.floor(pos / width);

    const idx = pos * channels;
    data[idx + 3] = 0; // Transparent

    const neighbors = [
      [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const npos = ny * width + nx;
        if (!visited[npos]) {
          visited[npos] = 1;
          if (isBackground(nx, ny)) {
            queue.push(npos);
          }
        }
      }
    }
  }

  // Defringe: remove light halo (> 215) immediately adjacent to transparent background
  const toClear = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pos = y * width + x;
      const idx = pos * channels;
      if (data[idx + 3] > 0) {
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        if (r > 215 && g > 215 && b > 215) {
          let hasTransparentNeighbor = false;
          const neighbors = [
            [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
          ];
          for (const [nx, ny] of neighbors) {
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nidx = (ny * width + nx) * channels;
              if (data[nidx + 3] === 0) {
                hasTransparentNeighbor = true;
                break;
              }
            } else {
              hasTransparentNeighbor = true;
              break;
            }
          }
          if (hasTransparentNeighbor) {
            toClear.push(idx);
          }
        }
      }
    }
  }

  for (const idx of toClear) {
    data[idx + 3] = 0;
  }

  // Check dimension normalization
  if (width === TARGET_WIDTH && height === TARGET_HEIGHT) {
    await sharp(data, { raw: { width, height, channels } })
      .png()
      .toFile(outputPath);
  } else {
    const scale = Math.min(TARGET_WIDTH / width, TARGET_HEIGHT / height);
    const newWidth = Math.round(width * scale);
    const newHeight = Math.round(height * scale);

    const resizedBuffer = await sharp(data, { raw: { width, height, channels } })
      .resize(newWidth, newHeight, { kernel: sharp.kernel.nearest })
      .png()
      .toBuffer();

    const left = Math.floor((TARGET_WIDTH - newWidth) / 2);
    const top = TARGET_HEIGHT - newHeight; // Align by base (bottom)

    await sharp({
      create: {
        width: TARGET_WIDTH,
        height: TARGET_HEIGHT,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input: resizedBuffer, left, top }])
      .png()
      .toFile(outputPath);
  }

  console.log(`Processed: ${path.basename(inputPath)} -> ${outputPath}`);
}

async function run() {
  const inputDir = process.argv[2] || 'sprites_raw';
  const outputDir = process.argv[3] || 'src/assets/characters';

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (!fs.existsSync(inputDir)) {
    console.log(`Input directory ${inputDir} does not exist yet.`);
    return;
  }

  const files = fs.readdirSync(inputDir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
  });

  console.log(`Found ${files.length} sprite(s) in ${inputDir}`);
  for (const file of files) {
    const baseName = path.parse(file).name;
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${baseName}.png`);
    await processSprite(inputPath, outputPath);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))) {
  run().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
