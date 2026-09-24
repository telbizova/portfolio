// Разделы страницы кейса: по ним строятся заголовки и меню-индикатор справа
export const caseSections = [
  { id: 'about', title: 'О продукте' },
  { id: 'audience', title: 'Сегменты аудитории' },
  { id: 'problems', title: 'Пользовательские проблемы' },
  { id: 'solution', title: 'Решение' },
  { id: 'results', title: 'Результаты' },
  { id: 'reflection', title: 'Рефлексия' },
] as const;

export type CaseSectionId = (typeof caseSections)[number]['id'];

export const sectionTitle = (id: CaseSectionId) => caseSections.find((s) => s.id === id)!.title;
