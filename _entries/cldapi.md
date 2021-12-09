---
Name: cldapi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\compmgmtlauncher.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dpiscaling.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\psr.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\resmon.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\sdclt.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\slui.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\workfolders.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\write.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
