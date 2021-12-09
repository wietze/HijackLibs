---
Name: msi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\dxpserver.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fondue.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mdmappinstaller.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\msiexec.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\optionalfeatures.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\packageinspector.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
