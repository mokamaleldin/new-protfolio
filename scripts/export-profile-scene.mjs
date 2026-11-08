import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const root = fileURLToPath(new URL('../', import.meta.url));
const result = await build({ entryPoints: [`${root}src/components/profile-scene/WorkspaceArtwork.tsx`],
  bundle: true, write: false, platform: 'node', format: 'cjs', jsx: 'automatic', external: ['react', 'react/jsx-runtime'] });
const compiled = { exports: {} };
new Function('module', 'exports', 'require', result.outputFiles[0].text)(compiled, compiled.exports, createRequire(import.meta.url));
const { WorkspaceArtwork } = compiled.exports;
const render = (time) => renderToStaticMarkup(React.createElement(WorkspaceArtwork, {
  idPrefix: 'mohamed-workspace', time, title: 'Mohamed Kamaleldin — creative workspace',
  description: 'Layered vector artwork. Orange oversized tailoring, natural skin, curly hair and an illustrated workspace. Animation source: src/components/profile-scene/timeline.ts.',
}));

if (process.argv[2] === '--frames') {
  const directory = process.argv[3];
  if (!directory) throw new Error('Supply an output directory for review frames.');
  await mkdir(directory, { recursive: true });
  const { default: sharp } = await import('sharp');
  for (let frame = 0; frame < 336; frame++) {
    await sharp(Buffer.from(render(frame / 12))).resize(360, 424).png()
      .toFile(`${directory}/${String(frame).padStart(4, '0')}.png`);
  }
  console.log(`Rendered all 28 seconds at 12 fps to ${directory}`);
} else {
  const time = Number(process.argv[2] ?? 0.8);
  const output = process.argv[3] ?? `${root}public/images/profile/mohamed-workspace.svg`;
  await writeFile(output, `<?xml version="1.0" encoding="UTF-8"?>\n${render(time)}\n`);
  console.log(`Exported layered SVG at ${time}s: ${output}`);
}
