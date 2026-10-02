// Компании, по которым сгруппированы проекты на главной (строка над карточками).
// periodShort — для телефона: полный период не помещается в строку с названием.
// url — сайт компании: название становится ссылкой с ховером на иконке
export const companies: { id: string; name: string; period: string; periodShort: string; url?: string }[] = [
  { id: 'root-code', name: 'Root Code', period: 'Февраль 2026 — Сентябрь 2026', periodShort: 'Фев 2026 — Сен 2026', url: 'https://rootcode.ru/' },
  { id: 'black-mesa', name: 'Black Mesa IT', period: 'Январь 2024 — Декабрь 2025', periodShort: 'Янв 2024 — Дек 2025', url: 'https://blackmesait.ru/' },
];
