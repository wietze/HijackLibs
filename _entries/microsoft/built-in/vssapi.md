---
Name: vssapi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\bootim.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\cleanmgr.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsdbutil.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\ntdsutil.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\recoverydrive.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\resetengine.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rstrui.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\sdclt.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\srtasks.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systemreset.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\vssadmin.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\vssvc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wbengine.exe'
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
