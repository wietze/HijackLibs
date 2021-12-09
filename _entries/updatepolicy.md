---
Name: updatepolicy.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\musnotification.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\musnotificationux.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\usocoreworker.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
