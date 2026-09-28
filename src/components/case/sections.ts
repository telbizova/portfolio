// Разделы страницы кейса: по ним строятся заголовки и меню-индикатор справа
export const caseSections = [
  { id: 'about', title: 'О проекте' },
  { id: 'context', title: 'Контекст' },
  { id: 'audience', title: 'Сегменты аудитории' },
  { id: 'problems', title: 'Пользовательские проблемы' },
  { id: 'task', title: 'Задача' },
  { id: 'process', title: 'Процесс' },
  { id: 'solution', title: 'Решение' },
  { id: 'ranking', title: 'Ранжирование' },
] as const;

export type CaseSectionId = (typeof caseSections)[number]['id'];

export const sectionTitle = (id: CaseSectionId) => caseSections.find((s) => s.id === id)!.title;
