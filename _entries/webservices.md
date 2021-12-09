---
Name: webservices.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\clipup.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\sppsvc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wifitask.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wksprt.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

