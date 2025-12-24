# EN

# SCSS Project starter kit

Starter template for landing pages on React 19 + TypeScript + Vite with a ready
SCSS architecture: normalization, base variables, mixins, utility classes, and
font wiring.

## Quick start

- Requirements: Node.js ≥ 18, any package manager (`yarn.lock` is in the repo).
- Install dependencies: `yarn install` (or `npm install`/`pnpm install`).
- Local development: `yarn dev` and open the address from the console (usually
  http://localhost:5173).
- Production build: `yarn build` (artifacts in `dist/`), preview the bundle with
  `yarn preview`.

## Scripts

- `yarn dev` — run Vite in dev mode with HMR.
- `yarn build` — build the TypeScript project and Vite bundle.
- `yarn lint` — ESLint (flat config, base JS/TS rules + React Hooks/Refresh).
- `yarn preview` — local server to inspect the contents of `dist/`.

## Project structure

- `index.html` — Vite entry point.
- `src/main.tsx` — mounts the app into `#root`, imports `src/styles/main.scss`.
- `src/App.tsx` — root component (empty for now; add landing markup).
- `src/styles/main.scss` — single entry point for styles (imports base modules).
- `src/styles/_normalize.scss` — normalization and resets.
- `src/styles/_globals.scss` — typography, base styles for text and links.
- `src/styles/_fonts.scss` — connects `Space Grotesk` via `@font-face`.
- `src/styles/_variables.scss` — CSS variables (colors, radii, container sizes,
  etc.).
- `src/styles/_mixins.scss` — utilities (`fluid-text`, resets for links/buttons,
  flex/abs-center, square).
- `src/styles/_media.scss` — breakpoints (desktop/tablet/mobile) and `hover`
  mixin.
- `src/styles/_utils.scss` — ready-made classes: `.container`,
  `.visually-hidden`, `.hidden-mobile`, `.visible-mobile`.
- `public/` — assets automatically copied to the build (put fonts in
  `public/fonts/`).

## Stack and configuration

- Vite 7 (rolldown) + `@vitejs/plugin-react`.
- React 19 with the modern `react-dom/client` API.
- TypeScript 5.9, strict config in `tsconfig.app.json`.
- ESLint in flat-config format (`eslint.config.js`), global ignore for `dist/`.
- PostCSS configured via `postcss.config.cjs` with `postcss-pxtorem` (converts
  `px` to `rem`).

## Working with styles

- All base styles are imported from `src/styles/main.scss`; add your modules via
  `@use`.
- Colors, sizes, and other tokens live in `src/styles/_variables.scss` (using
  CSS custom properties).
- For fluid typography use `fluid-text($max, $min)`, for responsiveness use the
  mixins from `_media.scss`.
- Container and visibility utilities are ready to go; extend them in
  `_utils.scss`.
- When adding fonts, replace paths in `src/styles/_fonts.scss` or add new
  `@font-face`; drop files into `public/fonts`.

## Development and build

- Hot reload works out of the box; add pages/sections in `src/App.tsx`.
- The final build lands in `dist/`; to deploy, serve the contents of that folder
  as static files or via CDN.

## Note

- There are no data mocks in this project — the structure is intentionally clean
  for a fast start.

# RU

# Стартовый проект для разработки css,vite,react,ts

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
