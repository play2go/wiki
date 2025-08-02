---
order: 10
authors:
  - maksorr2
---

# Установка OpenSSH (Windows)

## Шаги по установке OpenSSH (Windows Server 2025/2022/2019) {#windowsnew}

:::info Информация
Все настройки OpenSSH Server можно найти по пути: `C:\ProgramData\ssh`
:::

:::warning Удаление OpenSSH
Если вы хотите удалить `OpenSSH`, то введите в `PowerShell` данну команду:

```powershell
# Для удаления OpenSSH Server
Remove-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

# Для удаления OpenSSH CLient
Remove-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

# Для удаления файлов конфигурации
Remove-Item -Recurse -Force "C:\ProgramData\ssh"
```

После данных комманд перезагрузите вашу машину.
:::

1. Откройте `PowerShell` от имени Администратора. Введите следующие команды:

```powershell
# Проверка того, что OpenSSH Server не установлен
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'

# Установка OpenSSH Server
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
# При необходимо возможно установить OpenSSH Client
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

# Запуск сервиса
Start-Service sshd

# Запуск сервиса при загрузке сервера
Set-Service -Name sshd -StartupType 'Automatic'

# Проверка правил брандмауэра. Они  
if (!(Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {
    Write-Output "Firewall Rule 'OpenSSH-Server-In-TCP' does not exist, creating it..."
    New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
} else {
    Write-Output "Firewall rule 'OpenSSH-Server-In-TCP' has been created and exists."
}
```

---

## Шаги по установке OpenSSH (Windows Server OLD) {windowsold}

:::warning Обратите внимание
**Используйте этот способ только при невозможности установки через `Add-WindowsCapability`.**

Если команда `Add-WindowsCapability` **работает** на вашей версии Windows Server — **это самый надёжный и поддерживаемый метод** установки OpenSSH.  
Метод ниже — резервный и менее устойчивый, используйте **только в случае ошибок**.
:::

1. Установите `OpenSSH Server` с [Github](https://github.com/PowerShell/Win32-OpenSSH/releases). (желательно скачать zip)

2. Распокуйте zip архив, скопируйте его содержимое по пути `C:\Program Files`

3. Добавьте ssh в PATH:

```powershell
$NewPath = "C:\Program Files\OpenSSH"  # ← Укажите нужный путь
$OldPath = [Environment]::GetEnvironmentVariable("Path", "Machine")

if ($OldPath -notlike "*$NewPath*") {
    $UpdatedPath = "$OldPath;$NewPath"
    [Environment]::SetEnvironmentVariable("Path", $UpdatedPath, "Machine")
    Write-Output "✅ Путь успешно добавлен в системный PATH"
} else {
    Write-Output "ℹ️ Путь уже присутствует в системном PATH"
}
```

4. Откройте `PowerShell` от имени Администратора. Перейдите в папку с OpenSSH. Введите следующие команды:

```powershell
# Перейдите в папку, где вы распаковали архив. Далее введите команду для установки SSH
.\install-sshd.ps1 # ← Следуйте инструкциям

# Добавьте правило для брандмауэра
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' `
-Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22

# Включение служб при загрузке системы. Включение служб прямо сейчас.
Set-Service -Name ssh-agent -StartupType Automatic
Set-Service -Name sshd -StartupType Automatic
Start-Service sshd
```

:::warning Удаление OpenSSH
Если вы хотите удалить OpenSSH, то вам необходимо перейти в папку с OpenSSH, активировать скрипт `uninstall-sshd.ps1`
:::
