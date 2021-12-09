---
Name: dmcmnutils.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\deviceenroller.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmcertinst.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmcfghost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmnotificationbroker.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmomacpmo.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\edpcleanup.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\hvsievaluator.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmappinstaller.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmdiagnosticstool.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\musnotificationux.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\musnotifyicon.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\omadmclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\upgraderesultsui.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\usocoreworker.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

