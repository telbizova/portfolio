/*
  Плагины Sätteri (движок Markdown в Astro) для текста кейса.

  caseBlockTitles — абзац из одной жирной строки («**Один проект**») получает
  класс .case-block-title. Абзац, который только начинается с жирного,
  остаётся обычным текстом.

  caseFigures — картинка и подпись курсивом со следующей строки

    ![Описание](./slug/shot.png)
    *Подпись*

  превращаются в <figure class="case-figure"> с <figcaption>. Саму картинку
  дальше оптимизирует Astro: webp, width/height, ленивая загрузка.
*/
import { typograf } from './typograf.mjs';

const meaningful = (node) => node.children.filter((child) => !(child.type === 'text' && !child.value.trim()));
const isElement = (node, tagName) => node?.type === 'element' && node.tagName === tagName;

export const caseBlockTitles = {
  name: 'case-block-titles',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const kids = meaningful(node);
      if (kids.length === 1 && isElement(kids[0], 'strong')) {
        ctx.setProperty(node, 'className', ['case-block-title']);
      }
    },
  },
};

export const caseFigures = {
  name: 'case-figures',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const [image, caption, ...rest] = meaningful(node);
      if (!isElement(image, 'img') || rest.length) return;
      if (caption && !isElement(caption, 'em')) return;

      const children = [image];
      if (caption) {
        children.push({ type: 'element', tagName: 'figcaption', properties: {}, children: caption.children });
      }

      ctx.replaceNode(node, { type: 'element', tagName: 'figure', properties: { className: ['case-figure'] }, children });
    },
  },
};

// Неразрывные пробелы после коротких слов и перед тире во всём тексте кейса
export const caseTypograf = {
  name: 'case-typograf',
  text(node, ctx) {
    const value = typograf(node.value);
    if (value !== node.value) ctx.replaceNode(node, { type: 'text', value });
  },
};
