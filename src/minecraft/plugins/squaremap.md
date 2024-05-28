---
authors: 
  - s3nkwr
---

# Squaremap

Squaremap это Вебкарта вашего сервера которая отрисовывает все в стиле Майнкрафта, как Карты.
И также у этой карты есть преимущество над Dynmap - она гипер легкая и делает рендеры всей карты очень быстро.

API этого плагина есть на Гитхабе, и благодаря ему можно делать крутые аддоны.

## [Демо Squaremap](https://squaremap-demo.jpenilla.xyz/)

## Установка

::: info Заметка
Плагин требует дополнительный порт!
:::

1. Скачиваем плагин Squaremap с [Modrinth](https://modrinth.com/plugin/squaremap) для нужной вам версии. 
2. Скидываем его в `~/plugins` вашего сервера.
3. Перезапускаем/Запускаем сервер.
4. Плагин установлен

## Настройка

1. После установки плагин надо изменить конфиг, чтобы вебкарта заработала. Заходим в `~/plugins/squaremap/config.yml`
2. Находим `port:8080` и меняем `8080` на тот порт который купили. Пример: `port:20347`
3. Для русского языка надо поменять Файл языка. Находим: `language-file: lang-en.yml` и ставим `language-file: lang-ru.yml`.
   ::: warning
   **Для версии 1.1.11, надо изменить Файл языка.** **[Готовая версия файла языка](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/jpenilla/squaremap/blob/master/common/src/main/resources/locale/lang-ru.yml), надо всего лишь закинуть в `~/plugins/squaremap/locale/`**
   :::
4. Перезапускаем/Запускаем сервер.
5. Плагин настроен

## Аддоны Squaremap

### Squaremap Skins

Добавляет поддержку SkinRestorerX и делает директорию которая доступна через IP или Домен.

Пример: `http://localhost:{port}/skins/{name}.png`

#### Настройка Squaremap Skins

1. Скачиваем Архив со всеми аддонами с [Гитхаба](https://nightly.link/jpenilla/squaremap-addons/workflows/build/master/artifacts.zip)
2. Вытаскиваем плагин `squaremap-skins-1.0.0-SNAPSHOT.jar`
3. Скидываем его в `~/plugins` вашего сервера.
4. Перезапускаем/Запускаем сервер.
5. Заходим в конфиг Squaremap (/plugins/squaremap/config.yml), чтобы заставить Аддон работать. 
6. Находим поле `heads-url: https://mc-heads.net/avatar/{uuid}/16` и изменяем его на `heads-url: http://localhost:{port}/skins/{name}.png`
7. Перезапускаем/Запускаем сервер.
8. Аддон установлен

## Остальные аддоны

1. Скачиваем Архив со всеми аддонами с [Гитхаба](https://nightly.link/jpenilla/squaremap-addons/workflows/build/master/artifacts.zip)
2. Вытаскиваем нужный вам Аддон.
3. Скидываем его в `~/plugins` вашего сервера.
4. Перезапускаем/Запускаем сервер.
5. Аддон установлен

## Команды Squaremap

::: tip :gear: Параметры
`<>` - обязательный параметр.
`[]` - не обязательный параметр.
:::

| Имя | Параметр | Описание | Право |
| ----------- | ----------- | ----------- | ----------- |
map cancelrender | `[world]` | Отмена рендера мира | squaremap.command.cancelrender |                    
map confirm | - | Подтвердить опасное действие  | - |      
map fullrender | `[world]` | Полностью прорендерить мир | squaremap.command.fullrender |       
map help | `[command]` | Команда которая отображает команды | - |    
map hide | `[player]` | Скрывает игрока с Карты | squaremap.command.hide | 
map show | `[player]` | Показывает игрока на Карте, если он скрыт | squaremap.command.show |  
map pauserender | `[world]` | Остановить рендер мира | squaremap.command.pauserender |
map radiusrender | `<world> <radius> [center]` | Запускает рендер по радиусу | squaremap.command.radiusrender |                 
map reload | - | Перезагружает плагин | squaremap.command.reload |      
map resetmap | - | Сбрасывает карту для мира | squaremap.command.resetmap |                        
map progresslogging | `[toggle]` | Показывает журнала рендера | squaremap.command.progresslogging | 
map progresslogging rate | `<seconds>` | Настраивает скорость журнала рендера | squaremap.command.progresslogging |             
