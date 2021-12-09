---
Name: kdstub.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
VulnerableExecutables:
- Path: '%SYSTEM32%\hvax64.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\hvix64.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

