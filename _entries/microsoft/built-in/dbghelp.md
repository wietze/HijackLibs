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
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\bootim.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\taskkill.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\tasklist.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\bdehdcfg.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\deploymentcsphelper.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\djoin.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\dnscacheugc.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\ieunatt.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\muiunattend.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\netbtugc.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\netiougc.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\pnpunattend.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\reagentc.exe'
  Type: Environment Variable
  Variable: WINDIR
- Path: '%SYSTEM32%\setupugc.exe'
  Type: Environment Variable
  Variable: WINDIR
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://wietze.github.io/blog/save-the-environment-variables
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

