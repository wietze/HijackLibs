---
Name: wer.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\dwwin.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\msdt.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\pcalua.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\relpost.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\rstrui.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\sdclt.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\srtasks.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wbengine.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\werfault.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\werfaultsecure.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wermgr.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

