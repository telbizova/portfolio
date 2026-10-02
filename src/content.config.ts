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
      // Номера слоёв cover-card-N, срезанных нижним краем обложки (модалки):
      // по ховеру не сдвигаются, а растут от нижнего края (--cover-lift), чтобы не открывался срез
      coverBottom: z.array(z.number()).default([]),
      // Где по горизонтали центр группы плашек на обложке, % ширины: на телефоне
      // обложка кадрируется так, чтобы плашки стояли по центру карточки
      coverFocus: z.number().default(28),
      // Где по вертикали начинается самая верхняя картинка обложки, % высоты:
      // на телефоне зазор от описания до неё одинаковый у всех карточек
      coverTop: z.number().default(9.9),
      // Страница кейса. Если about нет — кейс ещё без контента, показываем заглушку из макета
      hero: image().optional(),
      heroAlt: z.string().optional(),
      about: z
        .object({
          role: z.string(),
          period: z.string(),
          team: z.string(),
        })
        .optional(),
      // Плашка под «О проекте», например про NDA
      note: z.string().optional(),
    }),
});

export const collections = { cases };
