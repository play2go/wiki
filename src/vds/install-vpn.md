---
order: 14
authors:
  - s3nkwr
---

# VPN: OpenVPN/WireGuard

## Что это? {#what}

[OpenVPN](https://openvpn.net/) — это популярный VPN-протокол с открытым исходным кодом, который обеспечивает безопасное и зашифрованное соединение через интернет.

[WireGuard](https://www.wireguard.com/) — это современный VPN-протокол, известный своей простотой и безопасностью. Он использует передовые криптографические методы для установления защищенных соединений и отличается высокой производительностью и легкостью настройки.

## Как их установить? {#setup}

При покупке тарифа у вас есть выбор выбора дополнительного ПО, там находятся авто-установки OpenVPN и WireGuard.
Выбираем один из них и переходим на следующий этап:

- WireGuard: [#wireguard](#wireguard)
- OpenVPN: [#openvpn](#openvpn)
<AImg src="/vds/installvpn/order-1.png" alt="Страница покупки и выбор ПО"/>

### OpenVPN {#openvpn}

:::warning :warning: Внимание
OpenVPN заблокирован в России, используйте [WireGuard с клиентом AmneziaWG](#wireguard).
:::

1. Выбираем `OpenVPN` в поле для выбора дополнительного ПО.
2. Покупаем сервер, и после его установки заходим на него с помощью гайда [`Как подключиться к VDS по SSH`](/vds/ssh). Логин, пароль и айпи сервера должны быть на вашей почте.
3. Далее переходим в SFTP. В **Termius** для такого есть специальная вкладка, а для других клиентов используйте **WinSCP**. Подключение в нем простое, как порт используйте 22.
4. Переходим в папку `/etc/openvpn/easy-rsa/keys/` `название.ovpn`. Перетащите его в любую папку вашего компьютера.
5. Теперь скачиваем клиент OpenVPN Connect и заходим в него.
    - Android: https://play.google.com/store/apps/details?id=net.openvpn.openvpn
    - Windows: https://openvpn.net/client/client-connect-vpn-for-windows/
    - MacOS: https://openvpn.net/client-connect-vpn-for-mac-os/
    - Linux: [(клик, длинная ссылка)](https://openvpn.net/cloud-docs/tutorials/configuration-tutorials/connectors/operating-systems/linux/tutorial--learn-to-install-and-control-the-openvpn-3-client.html)
6. Чтобы зайти на сам сервер, нам нужно импортировать файл. Кликаем на кнопку `+`, выбираем вкладку `Import file` и закидываем скачанный файл с сервера.
7. Подключаемся и пользуемся **своим ВПН**.

### WireGuard {#wireguard}

:::warning Внимание
WireGuard заблокирован в России. Чтобы он заработал, нужно использовать клиент AmneziaWG.

- Android: https://play.google.com/store/apps/details?id=org.amnezia.awg&hl=de
- Windows: https://github.com/amnezia-vpn/amneziawg-windows-client
- MacOS: https://apps.apple.com/pl/app/amneziawg/id6478942365
- Linux: на данный момент отсутствует
:::

1. Выбираем `WireGuard` в поле для выбора дополнительного ПО.
2. Покупаем сервер, и после его установки заходим на него с помощью гайда [`Как подключиться к VDS по SSH`](/vds/ssh). Логин, пароль и айпи сервера должны быть на вашей почте.
3. Далее переходим в SFTP. В **Termius** для такого есть специальная вкладка, а для других клиентов используйте **WinSCP**. Подключение в нем простое, как порт используйте 22.
4. Переходим в папку `/etc/wireguard/client/`, там должен быть файл `client.conf`. Перетащите его в любую папку вашего компьютера.
5. Теперь скачиваем клиент [WireGuard](https://www.wireguard.com/install/)/AmneziaWG и заходим в него.
6. Чтобы зайти на сам сервер, нам нужно импортировать файл. Кликаем на кнопку `Импорт туннелей из файла` и выбираем скачанный файл с сервера.
7. Подключаемся и пользуемся **своим ВПН**.
