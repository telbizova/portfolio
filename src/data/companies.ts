// Компании, по которым сгруппированы проекты на главной (строка над карточками).
// periodShort — для телефона: полный период не помещается в строку с названием
export const companies = [
  { id: 'root-code', name: 'Root Code', period: 'Февраль - Сентябрь 2026', periodShort: 'Фев - Сен 2026' },
  { id: 'black-mesa', name: 'Black Mesa IT', period: 'Январь 2024 - Декабрь 2025', periodShort: 'Янв 2024 - Дек 2025' },
] as const;

export type CompanyId = (typeof companies)[number]['id'];
