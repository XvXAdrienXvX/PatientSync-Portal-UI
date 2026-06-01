/**
 * Reads .env from the project root and writes src/environments/env.ts.
 * Runs automatically via the "prestart" and "prebuild" npm scripts.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const raw = readFileSync(resolve(root, '.env'), 'utf-8');

const vars = Object.fromEntries(
  raw
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'))
    .map(l => {
      const idx = l.indexOf('=');
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    })
);

const content =
  '// Auto-generated from .env — do not edit directly.\n' +
  `export const env = ${JSON.stringify(vars, null, 2)} as const;\n`;

mkdirSync(resolve(root, 'src/environments'), { recursive: true });
writeFileSync(resolve(root, 'src/environments/env.ts'), content);

console.log('[env] src/environments/env.ts generated from .env');
