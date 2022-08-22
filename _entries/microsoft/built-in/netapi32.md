---
Name: netapi32.dll
Author: Chris Spehn
Created: 2021-08-16
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\appvclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\bootcfg.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\certutil.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dcdiag.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dfscmd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dfsdiag.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dfsrdiag.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dfsutil.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dnscmd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsadd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsget.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsquery.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\ie4uinit.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mstsc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\qappsrv.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\spaceagent.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wbengine.exe'
    Type: Sideloading
Resources:
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

