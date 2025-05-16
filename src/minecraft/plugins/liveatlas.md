---
authors:
  - c1oudychan
---

# LiveAtlas

LiveAtlas это проект JLyne, нацеленный на улучшение веб интерфейса карт таких как: Squaremap, Dynmap.

LiveAtlas сделан на [Vue.js](https://github.com/vuejs/core) и [TypeScript](https://www.typescriptlang.org).

## Установка для Dynmap {#dynmap}

:::warning Обратите внимание
Этот пункт **только** для установки на Dynmap.
Не подходит к другим плагинам.
:::

1. Скачиваем архив с файлами LiveAtlas. [GitHub](https://github.com/JLyne/LiveAtlas/releases/latest)
2. Распаковываем его в папку `~/plugins/dynmap/web` вашего сервера;
3. Заходим в конфиг Dynmap `~/plugins/dynmap/configuration.txt`;
4. Находим поле `update-webpath-files: true` и ставим его на false `update-webpath-files: false`;
5. Убираем веб CDN кеш. Если не знаете что это такое, то не убирайте;
6. LiveAtlas для Dynmap установлен.

## Установка для Squaremap {#squaremap}

1. Скачиваем архив с файлами LiveAtlas. [GitHub](https://github.com/JLyne/LiveAtlas/releases/latest)
2. Распаковываем его в папку `~/plugins/Squaremap/web` вашего сервера;
3. Заходим в конфиг Squaremap `~/plugins/Squaremap/config.yml`;
4. Находим поле `auto-update: true` и ставим его на false `auto-update: false`;
5. Теперь надо изменить `index.html` LiveAtlas'а, чтобы он понял как работать с Squaremap: `~/plugins/Squaremap/web/index.html`;
6. Внутрь `<script> window.liveAtlasConfig` добавляем:

  ```js
  servers: {
      squaremap: {
          squaremap: window.location.pathname
      }
  },

  # Получается вот такое

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

7. Убираем также `<script src="./standalone/config.js"></script>`, так как для Squaremap он не нужен;
8. Убираем веб CDN кеш;
9. LiveAtlas для Squaremap установлен.

## Установка для прокси (Nginx) {#nginx}

1. Следуйте гайдам [Dynmap](https://github.com/webbukkit/dynmap/wiki/External-Webserver-Basics) или [Squaremap](https://github.com/jpenilla/squaremap/wiki/Internal-vs-External-Web-Server#external-server), если надо;
2. Скачиваем архив с файлами LiveAtlas. [GitHub](https://github.com/JLyne/LiveAtlas/releases/latest)
3. Распаковываем архив в корень сайта. index.html должен быть перезаписан;
4. Конфигурация обязательна;

:::tip Совет

- Для Dynmap конфигурация не требуется.
- Для Squaremap, следуйте этому [гайду](#squaremap).
- Для конфигурации с множеством серверов следуйте этому [гайду](https://github.com/JLyne/LiveAtlas/wiki/Configuring-Multiple-Servers).

:::

5. Убираем веб CDN кеш. Если не знаете что это такое, то не убирайте;
6. LiveAtlas для Веб сервера установлен.
