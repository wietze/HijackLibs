---
Name: activeds.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\applysettingstemplatecatalog.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\agentservice.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsadd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsget.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsmod.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsrm.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\gpfixup.exe'
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

