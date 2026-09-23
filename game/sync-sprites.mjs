import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/mathe/.gemini/antigravity-cli/brain/08e44c8a-bc4e-4b7d-9a1e-af80e5e32428';
const rawDir = 'sprites_raw';

if (!fs.existsSync(rawDir)) {
  fs.mkdirSync(rawDir, { recursive: true });
}

const files = fs.readdirSync(brainDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

// Map of prefixes to base name
for (const file of files) {
  // e.g. bia_crying_1789915469562.jpg -> bia_crying.jpg
  const match = file.match(/^([a-z_]+)_\d+\.(jpg|png)$/);
  if (match) {
    const baseName = match[1];
    const ext = match[2];
    const src = path.join(brainDir, file);
    const dest = path.join(rawDir, `${baseName}.${ext}`);
    fs.copyFileSync(src, dest);
    console.log(`Synced ${file} -> ${dest}`);
  }
}
