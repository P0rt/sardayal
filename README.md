[![EditorConfig](https://github.com/P0rt/sardayal/actions/workflows/editorconfig.yml/badge.svg)](https://github.com/P0rt/sardayal/actions/workflows/editorconfig.yml)
[![HTML](https://github.com/P0rt/sardayal/actions/workflows/html.yml/badge.svg)](https://github.com/P0rt/sardayal/actions/workflows/html.yml)

# Сайт газеты города Сардаял.

Вот тут [макет](https://www.figma.com/file/bsyeQt6HpUYaRTmfaUmX7a/%D0%9A%D1%80%D1%83%D0%B6%D0%BE%D0%BA?node-id=1%3A3) в фигме.

## Setup
[VSCode](https://code.visualstudio.com/), Git, bash(iterm)
[Editor config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig))
[Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))
Оптимизация изображений https://imageoptim.com/mac or https://squoosh.app/
Браузеры: Chrome, Chrome Canary, Firefox, Firefox Nightly, Safari

## Run
```bash
# в vscode находясь в проекте запускаем live server
npm run editorconfig # перед коммитом запускает тесты линтеров
```

## Git
```bash
git status # посмотреть в каком статусе файлы
git add . # подготовить в коммиту
git commit -m "Some commit" # коментарий начинаем с LET-n, например LET-01: added autotests and infrastructure 🐶
```
