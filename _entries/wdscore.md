---
Name: wdscore.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\bootim.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\deploymentcsphelper.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\djoin.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dnscacheugc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\muiunattend.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netbtugc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netiougc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\pnpunattend.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\resetengine.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\setupugc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\sysreseterr.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\systemreset.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\tapiunattend.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

