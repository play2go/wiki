---
authors:
  - Enigma_ZXC
---

# Подключение TCPShield к серверу

TCPShield - прокси сервис, защищающий сервер от DDoS атак.

Бесплатный тариф подходит для серверов с онлайном меньше 30 человек. О нём и пойдёт речь.

## Возможности бесплатного тарифа

- 1 ТБ трафика в месяц
- 1 сеть
- 3 домена

:::warning :warning: Обратите внимание
**Обязательно нужен купленный домен!**
:::

## Шаг 1

Для начала, нужно зайти на сайт [tcpshield.com](https://tcpshield.com/) и зарегистрироваться.

![](/minecraft/protection/tcpshield/img1.png)

## Шаг 2

После того как вы зарегистрируетесь и окажетесь на [panel.tcpshield.com](https://panel.tcpshield.com/dashboard/overview), нажмите на кнопку "Add network" и напишите название сети (любое название, какое захотите). После её создания нажмите на иконку настроек.

## Шаг 3

Добавляем CNAME запись в DNS. Target можно скопировать во вкладке Domains в настройках сети.

![](/minecraft/protection/tcpshield/img2.png)

## Шаг 4

Устанавливаем плагин на сервер, который будет заменять IP адреса TCPShield на IP адреса игроков.
![](/minecraft/protection/tcpshield/img3.png)

## Шаг 5

Переходим во вкладку Backends и нажимаем Add set.

![](/minecraft/protection/tcpshield/img4.png)

В поле **Name** придумываем любое имя.

В поле **Backend** пишем IP и порт вашего сервера.

## Шаг 6

Обратно переходим во вкладку Domains и в самом низу нажимаем на Add Domain.

Пишите ваш домен по которому будут заходить игроки.

Например: *play.example.com*

![](/minecraft/protection/tcpshield/img5.png)

:::details Если домен не проходит проверку
Нажмите на Begin Verification под полем Domain.

Создайте TXT запись.

![](/minecraft/protection/tcpshield/img6.png)

**Backend set**: Выбирайте ваш сервер, который вы добавляли ранее.
:::
