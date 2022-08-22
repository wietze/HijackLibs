---
Name: wininet.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\appvclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\browserexport.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\calc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\certreq.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\computerdefaults.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\dsregcmd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fodhelper.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\ie4uinit.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\logagent.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmdiagnosticstool.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mstsc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\presentationhost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\quickassist.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\tokenbrokercookies.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wkspbroker.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wksprt.exe'
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

