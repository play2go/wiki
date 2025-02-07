---
order: 15
authors:
  - notalunar
  - Sharikfi
---

# Установка сторонних браузеров: Windows Server

[[toc]]

## Google Chrome

Для начала откройте утилиту PowerShell с правами администратора из меню Пуск, или с использованием сочетания клавиш Win + X.

Когда откроется PowerShell, введите следующую команду:

```powershell
md -Path $env:temp\chromeinstall -ErrorAction SilentlyContinue | Out-Null
$Download = Join-Path $env:temp\chromeinstall chrome_installer.exe
Invoke-WebRequest 'http://dl.google.com/chrome/install/latest/chrome_installer.exe' -OutFile $Download
Invoke-Expression "$Download /silent /install"
```

:::info
На старых версиях PowerShell нужно использовать следующую команду:

```powershell
md -Path $env:temp\chromeinstall -ErrorAction SilentlyContinue | Out-Null
$Download = Join-Path $env:temp\chromeinstall chrome_installer.exe
(New-Object System.Net.WebClient).DownloadFile('http://dl.google.com/chrome/install/latest/chrome_installer.exe', $Download)
Invoke-Expression "$Download /silent /install"
```

:::

Проверьте установку Google Chrome командой:

```powershell
$INSTALLED = Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, Publisher, InstallDate
$INSTALLED += Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, Publisher, InstallDate
$INSTALLED | Where-Object { $_.DisplayName -match 'chrome' } | Sort-Object -Property DisplayName -Unique | Format-Table -AutoSize
```

Если установка прошла успешно, вывод должен быть таким:

```powershell
DisplayName   DisplayVersion Publisher  InstallDate
-----------   -------------- ---------  -----------
Google Chrome 92.0.4515.107  Google LLC 20210725
```

## Mozilla Firefox

Установка Mozilla Firefox имеет схожую команду, как и установка Google Chrome.

```powershell
md -Path $env:temp\firefoxinstall -ErrorAction SilentlyContinue | Out-Null
$Download = Join-Path $env:temp\firefoxinstall firefox_installer.exe
Invoke-WebRequest 'https://download.mozilla.org/?product=firefox-latest&os=win64&lang=en-US' -OutFile $Download
Invoke-Expression "$Download /S"
```

:::info
На старых версиях PowerShell нужно использовать следующую команду:

```powershell
md -Path $env:temp\firefoxinstall -ErrorAction SilentlyContinue | Out-Null
$Download = Join-Path $env:temp\firefoxinstall firefox_installer.exe
(New-Object System.Net.WebClient).DownloadFile('https://download.mozilla.org/?product=firefox-latest&os=win64&lang=en-US', $Download)
Invoke-Expression "$Download /S"
```

:::

Проверьте установку Mozilla Firefox командой:

```powershell
$INSTALLED = Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, Publisher, InstallDate
$INSTALLED += Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, Publisher, InstallDate
$INSTALLED | Where-Object { $_.DisplayName -match 'firefox' } | Sort-Object -Property DisplayName -Unique | Format-Table -AutoSize
```

Если установка прошла успешно, вывод должен быть таким:

```powershell
DisplayName                 DisplayVersion Publisher InstallDate
-----------                 -------------- --------- -----------
Mozilla Firefox (x64 en-US) 90.0.2         Mozilla
```
