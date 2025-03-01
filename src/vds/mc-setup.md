---
order: 30
authors:
  - envizar
---

# Настройка VDS/Dedic для Minecraft сервера

Полный гайд по настройке, защите VDS и установке Minecraft сервера. Учтите, что гайд написан
с использованием любимого ПО автора.

Что используется в гайде:

- `micro` - текстовый редактор
- `Debian/Ubuntu` - операционная система
- `tmux` - продвинутый аналог screen
- `ufw` - минималистичный фаерволл
- `graalvm` - производительный JVM
- `mariadb` - современная СУБД

Гайд в основном состоит из команд, так что сначала надо [подключиться к серверу по SSH](/vds/ssh)
под `root`.

## Установка необходимого

Для начала обновим пакеты:

```bash
apt update && apt upgrade -y
```

Далее установим самое необходимое:

```bash
apt install sudo tmux htop ufw wget mariadb-server -y
```

## Настройка SSH {#ssh}

Авторизовываться по паролю - крайне плохая идея. Безопасный вариант - использовать SSH ключи.
Всё, что вам нужно о них знать, описано [в этой статье](/vds/sshkeys).

После генерации и установки ключа обязательно проверьте, чтобы Вы могли авторизоваться без пароля,
ведь сейчас мы будем запрещать авторизацию по паролю.

```bash
micro /etc/ssh/sshd_config
```

В этом файле поменяйте `PasswordAuthentication yes` на `PasswordAuthentication no`.
Сразу поменяйте `Port 22` на другой, это нужно для повышения безопасности.

Сохраните файл (`Ctrl+S`) и выйдите из редактора (`Ctrl+Q`).

Теперь нужно применить изменения:

```bash
systemctl restart sshd
```

Готово! Переподключитесь, чтобы проверить, что всё работает. Не забудьте, что теперь
нужно подключаться по тому порту, который указан в конфиге.

## Настройка UFW {#ufw}

Во-первых, нужно разрешить подключаться к SSH порту:

```bash
ufw allow <порт>/tcp
```

Далее разрешим серверу синхронизовывать время:

```bash
ufw allow 123/udp
```

Вероятнее всего, Minecraft сервер будет работать на порту 25565:

```bash
ufw allow 25565/tcp
```

Посмотреть правила UFW можно так:

```bash
ufw status verbose
```

Применим правила:

```bash
ufw enable
```

:::details Не можете теперь войти?
Бывает так, что пользователи забывают разрешить SSH порт и не могут подключиться к серверу.
К счастью, это не беда. Скриптом в VMManager можно отключить UFW.

![](/vds/mc-setup/run-script.png)

![](/vds/mc-setup/ufw-disable.png)
:::

## Настройка базы данных {#database}

К счастью, разработчики позаботились о пользователях
и сделали удобный скрипт для начальной настройки:

```bash
mysql_secure_installation
```

Теперь подключаемся к MariaDB:

```bash
mariadb -u root
```

Создаём пользователя:

```sql
CREATE USER 'minecraft'@'localhost' IDENTIFIED BY 'ПАРОЛЬ';
```

Определитесь, какие базы данных нужны вашим плагинам.
Каждая база данных создаётся так:

```sql
CREATE DATABASE имя_базы_данных;
GRANT ALL PRIVILEGES ON имя_базы_данных.* TO 'minecraft'@'localhost';
FLUSH PRIVILEGES;
```

Чтобы вернуться к консоли, напишите `EXIT`.

## Установка GraalVM JDK {#graalvm}

```bash
wget https://download.oracle.com/graalvm/23/archive/graalvm-jdk-23_linux-x64_bin.tar.gz
tar -xvzf graalvm-jdk-23_linux-x64_bin.tar.gz
mv graalvm-jdk-23* /opt/graalvm
```

## Создание пользователя {#user}

Ни в коем случае не запускайте сервер от `root`! Это огромная брешь в безопасности, лучше
создать отдельного пользователя и запускать сервера от его имени.

```bash
useradd -m -s /bin/bash minecraft
su - minecraft
```

Теперь Вы не `root`, а `minecraft`. Переключиться обратно можно командой `exit`.

Теперь каждый сервер будет находиться в отдельной директории внутри `/home/minecraft/`.

## Настройка tmux

В файл `/home/minecraft/.tmux.conf` запишите следущее:

```bash
set -g mouse on
set -g default-terminal "tmux-256color"
set-option -ga terminal-overrides ",*:Tc"
```

## Запуск серверов {#mc-servers}

```bash
mkdir -p /home/minecraft/[сервер]
```

Воспользуйтесь встроенным проводником Termius, чтобы загрузить сборку. Не самое лучшее,
но самое лёгкое решение.

В папке должен быть скрипт для запуска с названием `run.sh`. Выглядеть он должен примерно так:

```bash
#!/usr/bin/env bash

SCRIPT_DIR=$(dirname "$(realpath "$0")")
JAR_FILE="server.jar"

while true; do

  echo -e "\n ▶ \e[48;5;22m\e[97m Запускаю сервер \e[0m\n"
  
  java -Xms8192M -Xmx8192M --add-modules=jdk.incubator.vector -XX:+UseG1GC \
  -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions \
  -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 \
  -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 \
  -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem \
  -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true \
  -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 \
  -jar "$SCRIPT_DIR/$JAR_FILE"

  echo -e "\n ▶ \e[41;97m Перезапуск сервера через 5 секунд \e[0m\n"

  sleep 5

done
```

Не забудьте дать права на исполнение скрипту:

```bash
chmod +x /home/minecraft/[сервер]/run.sh
```

Осталось только запустить сервер через tmux:

```bash
tmux new-session -s [сервер] < 'cd ~/[сервер] && ./run.sh'
```

Чтобы выйти, нажмите `Ctrl+B`, а потом `D`.
Вернуться к консоли можно так:

```bash
tmux attach -t [сервер]
```

Проделайте эти шаги для каждого сервера (если их несколько).
