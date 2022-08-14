---
Name: npmproxy.dll
Author: Wietze Beukema
Created: '2022-05-21'
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\apphostregistrationverifier.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\devicecensus.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\directxdatabaseupdater.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\fxscover.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\microsoft.uev.synccontroller.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\rdpclip.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\wordpad.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%PROGRAMFILES%\Microsoft\Edge\Application\msedge.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%PROGRAMFILES%\Microsoft Office\root\Office%VERSION%\excel.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%PROGRAMFILES%\Microsoft Office\root\Office%VERSION%\outlook.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%PROGRAMFILES%\Microsoft Office\root\Office%VERSION%\powerpnt.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%PROGRAMFILES%\Microsoft Office\root\Office%VERSION%\winword.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
Resources:
- https://wietze.github.io/blog/save-the-environment-variables
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

