import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      nda: z.boolean().default(false),
      // Компания из src/data/companies.ts — группа на главной
      company: z.enum(['root-code', 'black-mesa']),
      order: z.number(),
      cover: image(),
      coverAlt: z.string(),
      // Виджеты поверх скриншота: x, y (левый верхний угол до поворота), ширина
      // в px карточки из макета (700×440); rotate — градусы по часовой, как в CSS
      layers: z
        .array(
          z.object({
            src: image(),
            x: z.number(),
            y: z.number(),
            w: z.number(),
            rotate: z.number().default(0),
          }),
        )
        .default([]),
    }),
});

export const collections = { cases };
