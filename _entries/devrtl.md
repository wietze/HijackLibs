---
Name: devrtl.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\drvinst.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\pnpunattend.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\systemsettingsadminflows.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\wowreg32.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
