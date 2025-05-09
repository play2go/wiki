---
order: 7
authors:
  - SimonSays2310
---

# Установка и настройка xRDP

## Что это? {#what}

[xRDP](https://www.xrdp.org/) - [RDP](https://ru.wikipedia.org/wiki/Remote_Desktop_Protocol)-сервер для Linux с открытым исходным кодом. При его установке, вы сможете подключиться к вашему серверу не только по протоколу SSH, но и по RDP, который является более удобным из-за наличия графического интерфейса.

## Как его установить? {#setup}

1. Необходимо создать отдельного пользователя для xRDP (можно использовать root аккаунт, но нежелательно) командой `adduser xrdp`;

2. После заполнения всех полей, в том числе и пароля аккаунта, необходимо командой `usermod -a -G ssl-cert xrdp` выдать доступ к генерации TLS-сертификатов (генерируются самоподписанные через OpenSSL, если необходимо - замените их на свои собственные, находятся они в `/etc/xrdp/`), а также (если нужно) выдать права суперпользователя командой `usermod -a -G sudo xrdp`;

3. Далее выходим из системы и заходим под только что созданным аккаунтом, после чего командой `sudo apt install xrdp` устанавливаем сам xRDP, а командой `sudo apt install xfce4` - саму графическую оболочку (в статье используется XFCE, если необходимо - можно установить любую другую);

:::tip Подсказка
Также для перехода в другой аккаунт можно использовать команду `su ИМЯ_АККАУНТА`.
:::

4. Выходим из SSH, открываем RDP клиент (в Windows он уже встроен и называется как "Подключение к удалённому рабочему столу"), вводим IP-адрес вашей VDS и пробуем подключаться. Должно появиться окно ввода логина и пароля, в него введите данные от созданного вами аккаунта.

:::info Информация
На "Домашней" либо же "Начальной" версии Windows не предустановлен RDP клиент, под такие системы необходимо устанавливать [RDPWrap](https://github.com/stascorp/rdpwrap).
:::

![Экран входа в систему](/vds/xrdp/1.png)

5. Если при авторизации появилась графическая оболочка - то поздравляем, вы всё сделали правильно! Теперь вы можете устанавливать любые программы, работающие только с графическим интерфейсом (браузер/прочее) и использовать их для своих нужд.

:::info Если сессия тормозит (Только для Windows)
Перед подключением зайдите во вкладку "Быстродействие" и выставьте скорость на "Локальная сеть (10 Mbps и выше)". Это включит RFX кодек и тем самым решит проблему с лагами сессии.
:::

:::info Опционально
По необходимости донастройте конфигурационный файл `xrdp.ini` в `/etc/xrdp/`, а также если нужна поддержка звука, [скомпилируйте необходимый модуль](/vds/xrdpsound).
:::
