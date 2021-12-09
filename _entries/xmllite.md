---
Name: xmllite.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\certreq.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\ddodiag.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\deviceenroller.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dmcfghost.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dmclient.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dmomacpmo.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dxpserver.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mdmdiagnosticstool.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\musnotificationux.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\musnotifyicon.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\omadmclient.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\psr.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\resetengine.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\sppsvc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\systemreset.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\upfc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\usocoreworker.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wbengine.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
