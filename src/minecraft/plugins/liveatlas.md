---
authors:
  - s3nkwr
---

# Live Atlas
Live Atlas это проект JLyne, нацеленный на улучшение веб интерфейса карт таких как: Squaremap, Dynmap.

Live Atlas сделан на [Vue.js](https://github.com/vuejs/core) и TypeScript.

## Установка для Dynmap
::: warning :warning: Обратите внимание
Этот пункт **только** для установки на Dynmap. 
Не подходит к другим плагинам.
:::
1. Скачиваем архив с файлами LiveAtlas. [GitHub](https://github.com/JLyne/LiveAtlas/releases/latest)
2. Распаковываем его в папку `~plugins/dynmap/web` вашего сервера.
3. Заходим в конфиг Dynmap `~plugins/dynmap/configuration.txt`.
4. Находим поле `update-webpath-files: true` и ставим его на false `update-webpath-files: false`.
5. Убираем веб CDN кеш. Если не знаете что это такое, то не убирайте
6. Live Atlas для Dynmap установлен.

## Установка для Squaremap
1. Скачиваем архив с файлами LiveAtlas. [GitHub](https://github.com/JLyne/LiveAtlas/releases/latest)
2. Распаковываем его в папку `~plugins/Squaremap/web` вашего сервера.
3. Заходим в конфиг Dynmap `~plugins/Squaremap/config.yml`.
4. Находим поле `auto-update: true` и ставим его на false `auto-update: false`
5. Теперь надо изменить `index.html` Live Atlas'а, чтобы он понял как работать с Squaremap: `plugins/Squaremap/web/index.html`.
6. Внутрь `<script> window.liveAtlasConfig` добавляем:
```js
servers: {
     squaremap: {
         squaremap: window.location.pathname
     }
 },
```
Получаем примерно такое.
```js
<script>
  window.liveAtlasConfig = {
    // By default LiveAtlas looks for a dynmap standalone/config.js file
    // This configuration can be used instead to support Pl3xmap and Squaremap installations as well as multiple servers (external webserver required)
    // To configure multiple servers, see https://github.com/JLyne/LiveAtlas/wiki/Configuring-Multiple-Servers.
    servers: {
       squaremap: {
          squaremap: window.location.pathname
       },
    },
```
7. Убираем также `<script src="./standalone/config.js"></script>`, так как для Squaremap он не нужен.
8. Убираем веб CDN кеш.
9. Live Atlas для Squaremap установлен.

## Установка для прокси (Nginx)
1. Следуйте гайдам [Dynmap](https://github.com/webbukkit/dynmap/wiki/External-Webserver-Basics) или [Squaremap](https://github.com/jpenilla/squaremap/wiki/Internal-vs-External-Web-Server#external-server), если надо.
2. Скачиваем архив с файлами LiveAtlas. [GitHub](https://github.com/JLyne/LiveAtlas/releases/latest)
3. Распаковываем архив в корень сайта.
4. Конфигурация для карт обязательна.
  ::: tip Совет
    Изменяем `index.html` на Веб сервере!
  :::
  - Для Dynmap конфигурация не требуется.
  - Для Squaremap, следуйте гайду с 4 шага.
  - Для конфигурации для множества серверов следуйте этому гайду.
5. Убираем веб CDN кеш. Если не знаете что это такое, то не убирайте.
6. Live Atlas для Веб сервера установлен.