---
Name: winmm.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\winsat.exe'
  Type: Sideloading
  AutoElevate: true
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://securelist.com/wastedlocker-technical-analysis/97944/
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
