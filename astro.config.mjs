// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { caseBlockTitles, caseFigures } from './src/lib/case-markdown.mjs';

export default defineConfig({
  devToolbar: { enabled: false },
  markdown: {
    processor: satteri({ hastPlugins: [caseBlockTitles, caseFigures] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
