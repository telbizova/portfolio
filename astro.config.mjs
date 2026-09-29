// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { caseBlockTitles } from './src/lib/case-block-titles.mjs';

export default defineConfig({
  devToolbar: { enabled: false },
  markdown: {
    processor: satteri({ hastPlugins: [caseBlockTitles] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
