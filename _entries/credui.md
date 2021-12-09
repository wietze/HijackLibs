---
Name: credui.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\efsui.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fxssvc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mstsc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\perfmon.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\rekeywiz.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rpcping.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systempropertiesadvanced.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\taskmgr.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\wbadmin.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wfs.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wkspbroker.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

