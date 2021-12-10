---
Name: winsta.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\change.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\chglogon.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\chgport.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\ctfmon.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\displayswitch.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\msg.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\musnotification.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\query.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\quser.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\qwinsta.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpclip.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpsa.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpsauachelper.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpshell.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdvghelper.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\reset.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rwinsta.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systempropertiesadvanced.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\systempropertiescomputername.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\systempropertiesdataexecutionprevention.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\systempropertieshardware.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\systempropertiesprotection.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\systempropertiesremote.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\tscon.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\tsdiscon.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\tskill.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

