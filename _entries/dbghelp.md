---
Name: dbghelp.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\arm'
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\arm\srcsrv'
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\arm64'
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\arm64\srcsrv'
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\x64'
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\x64\srcsrv'
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\x86'
  - '%PROGRAMFILES(x86)%\windows kits\10\debuggers\x86\srcsrv'
  - '%PROGRAMFILES(x86)%\cisco systems\cisco jabber'
  - '%PROGRAMFILES(x86)%\microsoft office\root\office%VERSION%'
  - '%PROGRAMFILES(x86)%\microsoft office\root\vfs\programfilesx86\microsoft analysis
    services\as oledb\140'
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\bootim.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\taskkill.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\tasklist.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

