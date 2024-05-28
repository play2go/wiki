---
authors: 
  - s3nkwr
  - Timtaran
---

# Plan

Plan это плагин и расшифровывается он так: Plan - Player Analytics.
Как и говорит название, он создан для Аналитики вашего сервера и создает целый сайт под эту Аналитику.

Плагин позволяет мониторить активность игроков, страну их проживания, количество игроков, количество игроков в среднем, количество новых игроков, средние затраты оперативной памяти, процессора, TPS сервера.

## Установка

::: tip :pushpin: Заметка
Плагин требует дополнительный порт!
:::

1. Скачиваем сам плагин с сайта [SpigotMC](https://www.spigotmc.org/resources/32536/)
2. Скидываем этот файл плагина в /plugins вашего сервера.
3. Перезапускаем/Запускаем сервер.
4. Плагин установлен

## Настройка

Заходим в `/plugins/Plan/config.yml`

:::tabs
== Смена порта
Находим

```yaml
Webserver:
    Port: 8804
```

И заменяем `8804` на наш порт из вкладки `Network`.
== Смена названия сервера
Находим

```yaml
Server:
    ServerName: Plan
```

Заменяем `Plan`
== Настройка авторизации
Необходим прокси (скрытие порта) с поддержкой SSL.

В данный момент отсутсвует в туториале.
:::

## Подключение MySQL

Дефолтный конфиг:

```yaml
Database:
    Type: SQLite
    MySQL:
    Host: localhost
    Port: 3306
    User: root
    Password: minecraft
    Database: Plan
    # Launch options to append after mysql driver address
    Launch_options: "?rewriteBatchedStatements=true&useSSL=false&serverTimezone=UTC"
    Max_connections: 8
    Max_Lifetime:
    Time: 25
    Unit: MINUTES
```

1. Надо изменить тип базы данной. Берем поле `Type: SQLite` и изменяем на `MySQL`
2. В Хосте MySQL надо поставить домен базы данной. Пример: `Host: c1.play2go.cloud`
3. В поле `User` надо поставить User'а вашей базы данной. Пример: `User: u592_lPbruWckvg`
4. В поле `Password` надо также поставить Пароль от базы данной. Пример: `Password: 887wdS-_wr1`
5. А концом настройки MySQL станет поле `Database`. Туда надо будет поставить Название базы данной. Пример: `Database: s869_plan`
6. База данных подключена к Plan!

## Функции Plan

- Сайт для аналитики и статистики вашего сервера
- Показ, из какой страны ваши игроки. С какого адреса заходят, версии.
- Сколько времени игроки наиграли, удержание, средний онлайн.
- И еще куча всего
- MySQL для сохранения данных
- Поддержка плагинов: Essential, ViaVersion, DiscordSRV, LuckPerms и многие другие

## Команды

| Имя | Замены | описание |
| ----------- | ----------- | ----------- |
| plan servers | - | Количество серверов в базе данных. |
| plan search | name/uuid | Поиск игрока |
| plan ingame | name/uuid | Показывает информацию об игроке в игре |
| plan json | name/uuid | Показывает сырые данные об игроке |
| plan register | --code (код) | Зарегистрировать веб-пользователя |
| plan unregister | username | Удаляет веб-пользователя |  
| plan logout | username | Выкинуть пользователя из веб-панели |
| plan users | - | Показывает всех пользователей веб-панели |
| plan info | - | Информация о плагине |
| plan reload | - | Перезагружает плагин |
| plan disable | feature | Отключает плагин или какую-либо функцию |  
| plan db | subcommand | Управлять базой данных |
| plan export | json/html | Экспортирует json или html данные |
| plan import | json/html | Имортиртует json или html данные |
