---
Name: dmenrollengine.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\deviceenroller.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dmomacpmo.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mdmappinstaller.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mdmdiagnosticstool.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\omadmclient.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\workfolders.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
