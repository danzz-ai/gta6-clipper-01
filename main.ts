// gta6-clipper-01: the entry is the clip itself — a vertical GTA 6 Short cut
// in this session and uploaded to YouTube. All this program does is hand the
// gate the video's address: it copies VIDEO.json from the repo root into
// /output/VIDEO.json. The gate reads the video's views from YouTube; nothing
// this program writes about the video is scored.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'VIDEO.json');
copyFileSync(join(botDir, 'VIDEO.json'), outPath);
// Fail loudly if the hand-in is not well formed, instead of handing the
// gate a VIDEO.json it cannot use: it must parse as JSON with a url string.
const video = JSON.parse(readFileSync(outPath, 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' || video.url.length === 0) {
  console.error('VIDEO.json has no url string');
  process.exit(1);
}
