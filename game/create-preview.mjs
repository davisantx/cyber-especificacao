import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export async function createContactSheet(spriteNames, outputFilePath, title = '') {
  const charactersDir = 'src/assets/characters';
  const SPRITE_W = 358;
  const SPRITE_H = 480;
  const PADDING = 20;
  const LABEL_H = 40;
  const BG_COLOR = '#1e293b';

  const n = spriteNames.length;
  // If <= 6, single row. Otherwise grid of cols up to 5
  const cols = n <= 6 ? n : Math.min(5, n);
  const rows = Math.ceil(n / cols);

  const totalW = cols * SPRITE_W + (cols + 1) * PADDING;
  const totalH = rows * (SPRITE_H + LABEL_H) + (rows + 1) * PADDING + (title ? 40 : 0);

  const composites = [];

  // If title provided, render title
  if (title) {
    const titleSvg = Buffer.from(`
      <svg width="${totalW}" height="40">
        <text x="50%" y="28" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#f8fafc">
          ${title}
        </text>
      </svg>
    `);
    composites.push({ input: titleSvg, left: 0, top: 10 });
  }

  const offsetY = title ? 40 : 0;

  for (let i = 0; i < n; i++) {
    const name = spriteNames[i];
    const col = i % cols;
    const row = Math.floor(i / cols);

    const x = PADDING + col * (SPRITE_W + PADDING);
    const y = offsetY + PADDING + row * (SPRITE_H + LABEL_H + PADDING);

    const spritePath = path.join(charactersDir, `${name}.png`);
    if (fs.existsSync(spritePath)) {
      const resizedSprite = await sharp(spritePath)
        .resize(SPRITE_W, SPRITE_H, { kernel: sharp.kernel.nearest })
        .png()
        .toBuffer();

      composites.push({ input: resizedSprite, left: x, top: y });
    } else {
      console.warn(`File missing for preview: ${spritePath}`);
    }

    // Label
    const cleanLabel = name.replace(/_/g, ' ');
    const labelSvg = Buffer.from(`
      <svg width="${SPRITE_W}" height="${LABEL_H}">
        <rect x="0" y="5" width="${SPRITE_W}" height="30" rx="6" fill="#334155" />
        <text x="50%" y="25" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#38bdf8">
          ${name}
        </text>
      </svg>
    `);
    composites.push({ input: labelSvg, left: x, top: y + SPRITE_H });
  }

  // Parse hex bg to rgb
  const r = parseInt(BG_COLOR.slice(1, 3), 16);
  const g = parseInt(BG_COLOR.slice(3, 5), 16);
  const b = parseInt(BG_COLOR.slice(5, 7), 16);

  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r, g, b, alpha: 1 }
    }
  })
    .composite(composites)
    .png()
    .toFile(outputFilePath);

  console.log(`Saved contact sheet to ${outputFilePath}`);
}

async function run() {
  const target = process.argv[2] || 'bia';
  const previewDir = 'sprites_preview';
  if (!fs.existsSync(previewDir)) {
    fs.mkdirSync(previewDir, { recursive: true });
  }

  if (target === 'bia') {
    const biaPoses = ['bia_calm', 'bia_panicked', 'bia_crying', 'bia_hopeful', 'bia_relieved', 'bia_champion'];
    await createContactSheet(biaPoses, path.join(previewDir, 'bia.png'), 'Bia — Expressões');
  } else if (target === 'caua') {
    const poses = ['caua_calm', 'caua_investigating', 'caua_confident'];
    await createContactSheet(poses, path.join(previewDir, 'caua.png'), 'Cauã — Expressões');
  } else if (target === 'leo') {
    const poses = ['leo_calm', 'leo_furious', 'leo_doubtful', 'leo_ashamed'];
    await createContactSheet(poses, path.join(previewDir, 'leo.png'), 'Léo — Expressões');
  } else if (target === 'igor') {
    const poses = ['igor_calm', 'igor_smug', 'igor_crying_caught'];
    await createContactSheet(poses, path.join(previewDir, 'igor.png'), 'Igor — Expressões');
  } else if (target === 'socorro') {
    await createContactSheet(['socorro_firm_witness'], path.join(previewDir, 'socorro.png'), 'Dona Socorro — Testemunha');
  } else if (target === 'raimundo') {
    await createContactSheet(['raimundo_observant'], path.join(previewDir, 'raimundo.png'), 'Seu Raimundo — Inspetor');
  } else if (target === 'diretor') {
    await createContactSheet(['diretor_serious'], path.join(previewDir, 'diretor.png'), 'Diretor — Sério');
  } else if (target === 'todos') {
    const all = [
      'bia_calm', 'bia_panicked', 'bia_crying', 'bia_hopeful', 'bia_relieved', 'bia_champion',
      'caua_calm', 'caua_investigating', 'caua_confident',
      'leo_calm', 'leo_furious', 'leo_doubtful', 'leo_ashamed',
      'igor_calm', 'igor_smug', 'igor_crying_caught',
      'socorro_firm_witness', 'raimundo_observant', 'diretor_serious'
    ];
    await createContactSheet(all, path.join(previewDir, 'todos.png'), 'Operação Camisa 10 — Todos os Personagens');
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))) {
  run().catch(console.error);
}
