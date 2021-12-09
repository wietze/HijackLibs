---
Name: fveapi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\baaupdate.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\bdechangepin.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fvenotify.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fveprompt.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\resetengine.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systemreset.exe'
    Type: Sideloading
    AutoElevate: true
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

