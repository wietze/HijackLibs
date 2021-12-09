---
Name: wtsapi32.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\bdeuisrv.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\magnify.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmappinstaller.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\raserver.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpclip.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpshell.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdvghelper.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\sdclt.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\securityhealthservice.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\slui.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systemsettingsadminflows.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\wusa.exe'
    Type: Sideloading
    AutoElevate: true
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

