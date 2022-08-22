---
Name: umpdc.dll
Author: Chris Spehn
Created: 2021-08-16
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\deviceenroller.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmcertinst.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\iesettingsync.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mousocoreworker.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\netevtfwdr.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\omadmclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\settingsynchost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\usocoreworker.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wifitask.exe'
    Type: Sideloading
Resources:
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

