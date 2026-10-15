// Путь внутри сайта с учётом base: на Vercel сайт в корне ('/'), на GitHub Pages —
// в подпапке ('/portfolio/', задаётся переменной BASE_PATH при сборке)
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;

// Обратное: путь страницы без подпапки — для адреса на основном сайте (canonical)
export const withoutBase = (path: string) => (base && path.startsWith(base) ? path.slice(base.length) || '/' : path);
