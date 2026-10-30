// Regenerates src/assets/favicons/favicon.ico and apple-touch-icon.png from
// favicon.svg. Chikara theme: white sine wave on Petrol Navy #093558.
// Run from the repo root: node scripts/gen-favicons.mjs
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PETROL = '#093558';
const dir = path.join(process.cwd(), 'src/assets/favicons');
const svgSource = await readFile(path.join(dir, 'favicon.svg'), 'utf8');

// White wave for the raster icons, centred with ~12% padding.
const makeIcon = async (size) => {
  const inner = Math.round(size * 0.76);
  const svg = svgSource.replace(/stroke="#[0-9a-fA-F]{6}"/, 'stroke="#FFFFFF"');
  const wave = await sharp(Buffer.from(svg)).resize(inner, inner, { fit: 'contain' }).png().toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: PETROL },
  })
    .composite([{ input: wave, gravity: 'center' }])
    .png()
    .toBuffer();
};

// 180x180 apple-touch-icon
await writeFile(path.join(dir, 'apple-touch-icon.png'), await makeIcon(180));

// favicon.ico: ICO container with PNG payloads (16, 32, 48)
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map(makeIcon));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);

let offset = 6 + sizes.length * 16;
const entries = sizes.map((size, i) => {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngs[i].length, 8); // payload size
  entry.writeUInt32LE(offset, 12); // payload offset
  offset += pngs[i].length;
  return entry;
});

await writeFile(path.join(dir, 'favicon.ico'), Buffer.concat([header, ...entries, ...pngs]));
console.log('wrote favicon.ico (%s) and apple-touch-icon.png', sizes.join('/'));
