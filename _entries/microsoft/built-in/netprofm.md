---
Name: netprofm.dll
Author: Wietze Beukema
Created: '2022-05-21'
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\fxscover.exe'
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
- Path: '%PROGRAMFILES%\Mozilla Firefox\firefox.exe'
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
- Path: '%PROGRAMFILES%\WindowsApps\MicrosoftTeams%VERSION%\msteams.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
Resources:
- https://wietze.github.io/blog/save-the-environment-variables
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

