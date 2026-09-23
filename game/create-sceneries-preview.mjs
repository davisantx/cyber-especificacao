import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function createSceneriesSheet() {
  const dir = 'src/assets/sceneries';
  const sceneries = [
    { id: 'sala_de_aula', label: 'Sala de Aula — 7º Ano A' },
    { id: 'corredor', label: 'Corredor da Escola' },
    { id: 'cantina', label: 'Cantina Escolar' },
    { id: 'vestiario', label: 'Vestiário de Futsal' },
    { id: 'diretoria', label: 'Diretoria da Escola' },
    { id: 'quadra', label: 'Quadra Poliesportiva' }
  ];

  const SCENE_W = 458;
  const SCENE_H = 256;
  const PADDING = 20;
  const LABEL_H = 40;
  const COLS = 3;
  const ROWS = 2;
  const TITLE_H = 50;

  const totalW = COLS * SCENE_W + (COLS + 1) * PADDING;
  const totalH = ROWS * (SCENE_H + LABEL_H) + (ROWS + 1) * PADDING + TITLE_H;

  const composites = [];

  // Title
  const titleSvg = Buffer.from(`
    <svg width="${totalW}" height="${TITLE_H}">
      <text x="50%" y="34" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#f8fafc">
        Operação Camisa 10 — Cenários de Fundo (Pixel Art 16:9)
      </text>
    </svg>
  `);
  composites.push({ input: titleSvg, left: 0, top: 10 });

  for (let i = 0; i < sceneries.length; i++) {
    const item = sceneries[i];
    const col = i % COLS;
    const row = Math.floor(i / COLS);

    const x = PADDING + col * (SCENE_W + PADDING);
    const y = TITLE_H + PADDING + row * (SCENE_H + LABEL_H + PADDING);

    const scenePath = path.join(dir, `${item.id}.jpg`);
    const resized = await sharp(scenePath)
      .resize(SCENE_W, SCENE_H, { kernel: sharp.kernel.nearest })
      .jpeg()
      .toBuffer();

    composites.push({ input: resized, left: x, top: y });

    // Label badge
    const labelSvg = Buffer.from(`
      <svg width="${SCENE_W}" height="${LABEL_H}">
        <rect x="0" y="5" width="${SCENE_W}" height="30" rx="6" fill="#334155" />
        <text x="50%" y="25" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">
          ${item.label}
        </text>
      </svg>
    `);
    composites.push({ input: labelSvg, left: x, top: y + SCENE_H });
  }

  const BG_COLOR = '#1e293b';
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
    .toFile('sceneries_preview/todos_cenarios.png');

  console.log('Saved sceneries preview to sceneries_preview/todos_cenarios.png');
}

createSceneriesSheet().catch(console.error);
