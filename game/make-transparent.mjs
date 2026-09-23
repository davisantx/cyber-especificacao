import sharp from 'sharp';
import fs from 'fs';

async function makeTransparent(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4: r, g, b, a

  // BFS / Flood fill from corners to find all connected background pixels
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackground(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Pure white or very near white background
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

  let head = 0;
  while (head < queue.length) {
    const pos = queue[head++];
    const x = pos % width;
    const y = Math.floor(pos / width);

    // Set alpha to 0 for this background pixel
    const idx = pos * channels;
    data[idx + 3] = 0;

    // Check 4-connected neighbors
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

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log('Saved transparent sprite to', outputPath);
}

const brainDir = 'C:/Users/mathe/.gemini/antigravity-cli/brain/0f003ea6-f157-4749-a49f-b7ed29113101';
const files = fs.readdirSync(brainDir);
const biaCalm = files.find(f => f.startsWith('bia_calm_pixel') && f.endsWith('.jpg'));
if (biaCalm) {
  makeTransparent(`${brainDir}/${biaCalm}`, 'test_bia_transparent.png');
}
