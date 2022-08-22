---
Name: atl.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\dsquery.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\filescrn.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\msconfig.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\msdt.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\msinfo32.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\perfmon.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\quickassist.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\storrept.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\vds.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\vdsldr.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\vssadmin.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wfs.exe'
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

