---
Name: urlmon.dll
Author: Chris Spehn
Created: 2021-08-16
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\bytecodegenerator.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\ie4uinit.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\ldifde.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\presentationhost.exe'
    Type: Sideloading
Resources:
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

