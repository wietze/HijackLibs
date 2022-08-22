---
Name: iumsdk.dll
Author: Chris Spehn
Created: 2021-08-16
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\bioiso.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fsiso.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\ngciso.exe'
    Type: Sideloading
Resources:
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

