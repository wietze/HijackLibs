---
Name: dsclient.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\dmcfghost.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dmomacpmo.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dstokenclean.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
