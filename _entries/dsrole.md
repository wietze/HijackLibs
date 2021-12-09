---
Name: dsrole.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\certutil.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\cipher.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\efsui.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\net1.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netplwiz.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\rekeywiz.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\systempropertiesadvanced.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\winrs.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wsmanhttpconfig.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wsmprovhost.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
