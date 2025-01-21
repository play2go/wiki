---
order: 1
authors:
  - Timtaran
---

# Настройка RCON

1. Перейдите на сервер, в котором нужно подключить RCON;
2. Перейдите на вкладку "Network" и нажмите "Create allocation";
![Создание порта](/minecraft/rcon/allocation-create.png)
3. Перейдите в `server.properties`;
4. Найдите `rcon.password` и `rcon.port`;
5. В ключе `rcon.password` придумайте пароль;
:::warning :warning: Придумайте защищённый пароль
Используйте [генератор паролей](https://passgen.co/), чтобы никто, кроме вас, не смог подключиться к RCON вашего сервера.
:::
6. В ключе rcon.port напишите порт, который вы получили во **втором** пункте;
7. Готово! Можете проверить работоспособность RCON, [установив mcrcon](pc).
