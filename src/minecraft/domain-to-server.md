---
order: 5
authors:
  - s3nkwr
  - envizar
---

# Привязка домена к серверу

## Создание A-записи {#a-record}

:warning: **Если у Вас панельный хостинг, а не VDS/Dedicated, пропускайте этот шаг.**

- В **Name** укажите нужный поддомен. Можно указать что угодно, но не забудьте указать то же самое на следующем шаге в поле **Target**.
- В **IPv4 address** укажите IP адрес сервера.
- Для Cloudflare: Оставьте **Proxy status** в **выключенном** состоянии. (DNS only)

::: info Пример
Привязка `120.120.120.120` к `srv.example.com`
<ThemedImg
    dark="/minecraft/domain/a-record-dark.png"
    light="/minecraft/domain/a-record-light.png"
    alt="A Record"
/>
:::

## Создание SRV-записи {#srv-record}

- В **Name** укажите `_minecraft._tcp.<поддомен>`. Впишите `_minecraft._tcp.`, если поддомен не нужен.
- В **Priority** и **Weight** впишите `0`.
- В **Port** введите порт вашего сервера.
- В **Target** введите [полный домен ноды](/host/nodes) или созданную A-запись.

::: info Пример
Привязка `c1.play2go.cloud:54321` к `play.example.com`
<ThemedImg
    dark="/minecraft/domain/srv-record-dark.png"
    light="/minecraft/domain/srv-record-light.png"
    alt="SRV Record"
/>
:::

## :warning: Важный момент {#important-notice}

Если на Вашей ноде есть сервер с портом 25565 (стандартный порт Майнкрафта),
то иногда он может появляться вместо Вашего.

Происходит это из-за того, что сначала берётся A/CNAME запись домена,
и если SRV запись не прогружается, происходит обращение к стандартному
порту Майнкрафта. Эта проблема **на стороне вашего провайдера/DNS сервера**,
и наша поддержка в такой ситуации ничем не поможет.
