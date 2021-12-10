---
Name: mi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\winrs.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wsmanhttpconfig.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wsmprovhost.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

