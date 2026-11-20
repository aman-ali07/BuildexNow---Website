import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

const SKIP = new Set(['node_modules', 'dist', '.claude', '.git', 'public', 'src', 'scripts']);

function collectEntries(dir: string, prefix = ''): Record<string, string> {
  const entries: Record<string, string> = {};
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(item.name)) continue;
    const full = path.join(dir, item.name);
    const key = `${prefix}${item.name}`;
    if (item.isDirectory()) {
      Object.assign(entries, collectEntries(full, `${key}/`));
    } else if (item.name === 'index.html' || (prefix === '' && item.name === '404.html')) {
      const name = key.replace(/\/(index|404)\.html$/, '') || key.replace(/\.html$/, '');
      entries[name || 'index'] = full;
    }
  }
  return entries;
}

const input = collectEntries(process.cwd());

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    assetsDir: 'static',
    rollupOptions: {
      input,
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion', 'gsap'],
        },
      },
    },
  },
});
