---
order: 14
authors:
  - FlashYan123
---

# Как использовать наш VPN?

:::warning :construction: Under construction...

Эта статья требует срочного улучшения.

Комментарий: *Отсутствует инструкция по настройке для Android.*

Вы можете помочь, [отправив необходимые изменения](https://github.com/play2go/wiki/blob/main/src/host/vpn.md) и сняв эту пометку (выставлено 2 августа 2024)
:::

## Какой у нас метод подключения?

Мы используем Marzban (VMess, VLESS, Shadowsocks).

## Настройка для Windows

1. Установите [Nekoray](https://github.com/MatsuriDayo/nekoray/releases).
2. Скопируйте выбранную вами ссылку VPN (`vmess://`, `vless://`, `ss://`), они будут выданы вам после покупки.
3. В приложении нажмите Program -> Add profile from clipboard.
4. Нажмите правой кнопкой мышки по профилю VPN -> Start, потом включите опции Tun Mode и System Proxy.

Настройка завершена, когда захотите выключить VPN, нажмите правой кнопкой мышки по профилю -> Stop и **не забудьте снять галочки с Tun Mode и System Proxy**.

## Настройка для IOS

1. Установите [FoXray](https://apps.apple.com/us/app/foxray/id6448898396).
2. Скопируйте выбранную вами ссылку VPN (`vmess://`, `vless://`, `ss://`), они будут выданы вам после покупки.
3. Нажмите на кнопку "Вставить профиль из буфера обмена".
![Вставка FoXray](/host/vpn/foxrayclip.jpg)
4. Запустите профиль, нажав кнопку Start.
![Старт FoXray](/host/vpn/foxraystart.jpg)

Настройка завершена, когда захотите выключить VPN - нажмите кнопку остановки, она будет находиться в том же месте, где и Start.
