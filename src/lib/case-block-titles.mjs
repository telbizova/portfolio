/*
  Плагин Markdown (движок Sätteri, встроен в Astro): помечает абзацы, в которых
  нет ничего, кроме жирной строки («**Один проект**»), классом case-block-title —
  это заголовки блоков в тексте кейса. CSS сам не отличит такой абзац от абзаца,
  который только начинается с жирного.
*/
export const caseBlockTitles = {
  name: 'case-block-titles',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const kids = node.children.filter((child) => !(child.type === 'text' && !child.value.trim()));
      if (kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'strong') {
        ctx.setProperty(node, 'className', ['case-block-title']);
      }
    },
  },
};
