---
Name: ktmw32.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\msdtc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mstsc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\netsh.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rstrui.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\srtasks.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wkspbroker.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

