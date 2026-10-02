// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { caseBlockTitles, caseFigures, caseTypograf } from './src/lib/case-markdown.mjs';

export default defineConfig({
  site: 'https://telbizova.vercel.app',
  devToolbar: { enabled: false },
  markdown: {
    processor: satteri({ hastPlugins: [caseBlockTitles, caseFigures, caseTypograf] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
