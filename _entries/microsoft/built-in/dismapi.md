---
Name: dismapi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\bootim.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\deploymentcsphelper.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\directxdatabaseupdater.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\hvsievaluator.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\resetengine.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systemreset.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\systemsettingsadminflows.exe'
    Type: Sideloading
    AutoElevate: true
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

