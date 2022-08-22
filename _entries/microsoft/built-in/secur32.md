---
Name: secur32.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\appvclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\calc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\certreq.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\certutil.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\computerdefaults.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\dfsrdiag.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsregcmd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsrm.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fodhelper.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\gpresult.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\klist.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\msdt.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\repadmin.exe'
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

