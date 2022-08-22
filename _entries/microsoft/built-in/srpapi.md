---
Name: srpapi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\appidpolicyconverter.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mshta.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpclip.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

