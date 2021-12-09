---
Name: winhttp.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\cmdl32.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\devicecensus.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsregcmd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmdiagnosticstool.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\msdt.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\mshta.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mstsc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\musnotification.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\musnotificationux.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\musnotifyicon.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\netsh.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\pacjsworker.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\resetengine.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rpcping.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systemreset.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\wkspbroker.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

