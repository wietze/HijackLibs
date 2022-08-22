---
Name: msvcp110_win.dll
Author: Chris Spehn
Created: 2021-08-16
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\agentactivationruntimestarter.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\appidpolicyconverter.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmcertinst.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmomacpmo.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\locationnotificationwindows.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmagent.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmappinstaller.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\omadmclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\provlaunch.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\provtool.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\windowsactiondialog.exe'
    Type: Sideloading
Resources:
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

