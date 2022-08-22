---
Name: version.dll
Author: Chris Spehn
Created: 2021-08-16
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\agentservice.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\certutil.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\choice.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\clip.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\cmstp.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\cofire.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\cscript.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\diskpart.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\diskraid.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dism.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\driverquery.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\forfiles.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fxssvc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\ie4ushowie.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\iexpress.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\msconfig.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mstsc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\openfiles.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\presentationhost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\psr.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\RelPost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\sfc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\sigverif.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systeminfo.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\taskkill.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\tasklist.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\timeout.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\unregmp2.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\verifiergui.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\vsgraphicsdesktopengine.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\waitfor.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wextract.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\where.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\whoami.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\winsat.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wscript.exe'
    Type: Sideloading
Resources:
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

