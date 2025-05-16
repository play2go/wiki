---
authors: 
  - c1oudychan
---

# Squaremap

Squaremap - это вебкарта вашего сервера, которая отрисовывает всё в стиле Майнкрафта, как Google Maps.
И также у этой карты есть преимущество над Dynmap - она гипер лёгкая и делает рендеры всей карты очень быстро.

API этого плагина есть на GitHub, и благодаря нему можно делать крутые аддоны.

## [Демо Squaremap](https://squaremap-demo.jpenilla.xyz/)

## Установка {#install}

:::info Заметка
Плагин требует дополнительный порт!
:::

1. Скачайте плагин с [официальной страницы](https://modrinth.com/plugin/squaremap), выбрав при скачивании нужную версию;
2. Выполните действия из [данной статьи](/minecraft/installplugins).

## Настройка {#setup}

1. После установки плагина надо изменить конфиг, чтобы вебкарта заработала. Заходим в `~/plugins/squaremap/config.yml`;
2. Находим `port:8080` и меняем `8080` на тот порт, который имеется во вкладке Network (не Primary). Пример: `port:20347`;
3. Чтобы сообщения были на русском, нужно поменять файл языка. Находим `language-file: lang-en.yml` и ставим `language-file: lang-ru.yml`;
   :::warning Важно
   Для версии 1.1.11 надо изменить файл языка.
   Готовую версия файла можно найти [по этой ссылке](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/jpenilla/squaremap/blob/master/common/src/main/resources/locale/lang-ru.yml), его надо закинуть в `~/plugins/squaremap/locale/`.
   :::
4. Перезапускаем/запускаем сервер;
5. Плагин настроен!

## Аддоны Squaremap {#addons}

### Squaremap Skins

Добавляет поддержку SkinsRestorer и делает директорию которая доступна через IP или Домен.

Пример: `http://localhost:{port}/skins/{name}.png`

#### Настройка Squaremap Skins

1. Скачиваем архив со всеми аддонами с [GitHub](https://nightly.link/jpenilla/squaremap-addons/workflows/build/master/artifacts.zip);
2. Выполняем действия из [данной статьи](/minecraft/installplugins);
3. Заходим в конфиг Squaremap (`~/plugins/squaremap/config.yml);
4. Находим поле `heads-url: https://mc-heads.net/avatar/{uuid}/16` и изменяем его на `heads-url: http://localhost:{port}/skins/{name}.png`;
5. Перезапускаем/Запускаем сервер;
6. Аддон установлен!

## Остальные аддоны {#other-addons}

1. Скачиваем архив со всеми аддонами с [GitHub](https://nightly.link/jpenilla/squaremap-addons/workflows/build/master/artifacts.zip);
2. Выполняем действия из [данной статьи](/minecraft/installplugins).

## Команды Squaremap {#squaremap-settings}

:::info Параметры
`<>` - обязательный параметр.
`[]` - не обязательный параметр.
:::

| Имя                      | Параметр                    | Описание                                  | Право                             |
| ------------------------ | --------------------------- | ----------------------------------------- | --------------------------------- |
| map cancelrender         | `[world]`                   | Отмена рендера мира                       | squaremap.command.cancelrender    |
| map confirm              | -                           | Подтвердить опасное действие              | -                                 |
| map fullrender           | `[world]`                   | Полностью прорендерить мир                | squaremap.command.fullrender      |
| map help                 | `[command]`                 | Команда которая отображает команды        | -                                 |
| map hide                 | `[player]`                  | Скрывает игрока с карты                   | squaremap.command.hide            |
| map show                 | `[player]`                  | Показывает игрока на карте, если он скрыт | squaremap.command.show            |
| map pauserender          | `[world]`                   | Остановить рендер мира                    | squaremap.command.pauserender     |
| map radiusrender         | `<world> <radius> [center]` | Запускает рендер по радиусу               | squaremap.command.radiusrender    |
| map reload               | -                           | Перезагружает плагин                      | squaremap.command.reload          |
| map resetmap             | -                           | Сбрасывает карту для мира                 | squaremap.command.resetmap        |
| map progresslogging      | `[toggle]`                  | Показывает журнала рендера                | squaremap.command.progresslogging |
| map progresslogging rate | `<seconds>`                 | Настраивает скорость журнала рендера      | squaremap.command.progresslogging |
