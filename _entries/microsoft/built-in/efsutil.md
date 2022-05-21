---
Name: efsutil.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\cipher.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\efsui.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\rekeywiz.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\filehistory.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://wietze.github.io/blog/save-the-environment-variables
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

