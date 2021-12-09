---
Name: iumbase.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
VulnerableExecutables:
- Path: '%SYSTEM32%\bioiso.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fsiso.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\ngciso.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
