# SCSS Project starter kit

Стартовый шаблон для лендингов на React 19 + TypeScript + Vite с готовой
SCSS-архитектурой: нормализация, базовые переменные, миксины, утилити-классы и
подключение шрифтов.

## Быстрый старт

- Требования: Node.js ≥ 18, любой пакетный менеджер (в репозитории есть
  `yarn.lock`).
- Установка зависимостей: `yarn install` (или `npm install`/`pnpm install`).
- Локальная разработка: `yarn dev` и открыть адрес из консоли (обычно
  http://localhost:5173).
- Продакшн-сборка: `yarn build` (артефакты в `dist/`), предпросмотр сборки —
  `yarn preview`.

## Скрипты

- `yarn dev` — запуск Vite в режиме разработки с HMR.
- `yarn build` — сборка TypeScript-проекта и бандл Vite.
- `yarn lint` — ESLint (flat-config, базовые правила JS/TS + React
  Hooks/Refresh).
- `yarn preview` — локальный сервер для проверки содержимого `dist/`.

## Структура проекта

- `index.html` — точка входа Vite.
- `src/main.tsx` — монтирование приложения в `#root`, подключение
  `src/styles/main.scss`.
- `src/App.tsx` — корневой компонент (пока пустой, добавляйте разметку
  лендинга).
- `src/styles/main.scss` — единая точка входа для стилей (подключает базовые
  модули).
- `src/styles/_normalize.scss` — нормализация и сбросы.
- `src/styles/_globals.scss` — типографика, базовые стили текста и ссылок.
- `src/styles/_fonts.scss` — подключение `Space Grotesk` через `@font-face`.
- `src/styles/_variables.scss` — CSS-переменные (цвета, радиусы, размеры
  контейнера и др.).
- `src/styles/_mixins.scss` — утилиты (`fluid-text`, reset для ссылок/кнопок,
  flex/abs-center, квадрат).
- `src/styles/_media.scss` — брейкпоинты (desktop/tablet/mobile) и mixin
  `hover`.
- `src/styles/_utils.scss` — готовые классы: `.container`, `.visually-hidden`,
  `.hidden-mobile`, `.visible-mobile`.
- `public/` — ассеты, автоматически копируются в сборку (положите шрифты в
  `public/fonts/`).

## Стек и конфигурация

- Vite 7 (rolldown) + `@vitejs/plugin-react`.
- React 19 с современным API `react-dom/client`.
- TypeScript 5.9, строгая конфигурация в `tsconfig.app.json`.
- ESLint в формате flat-config (`eslint.config.js`), глобальный игнор `dist/`.
- PostCSS настроен через `postcss.config.cjs` с `postcss-pxtorem` (перевод `px`
  → `rem`).

## Работа со стилями

- Все базовые стили подключены из `src/styles/main.scss`; добавляйте свои модули
  через `@use`.
- Цвета, размеры и прочие токены редактируются в `src/styles/_variables.scss`
  (используются CSS custom properties).
- Для резиновой верстки есть миксин `fluid-text($max, $min)`, для адаптива —
  миксины из `_media.scss`.
- Утилиты контейнера и скрытия элементов уже готовы; дополняйте их в
  `_utils.scss`.
- При добавлении шрифтов замените пути в `src/styles/_fonts.scss` или добавьте
  новые `@font-face`; файлы положите в `public/fonts`.

## Разработка и сборка

- Хотрелоад работает из коробки, добавляйте страницы/секции в `src/App.tsx`.
- Готовая сборка попадает в `dist/`; для деплоя достаточно раздавать содержимое
  каталога статикой или через CDN.

## Примечание

- В проекте нет моков данных — структура максимально чистая для быстрого старта
  проекта.
