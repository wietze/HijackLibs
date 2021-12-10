---
Name: userenv.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\bdeuisrv.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\colorcpl.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dccw.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\deviceenroller.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dmomacpmo.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dsregcmd.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\efsui.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\gpupdate.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmappinstaller.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mdmdiagnosticstool.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\microsoftedgebchost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\microsoftedgecp.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\microsoftedgesh.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\msra.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\musnotification.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\netsh.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\omadmclient.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rekeywiz.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\securityhealthservice.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\settingsynchost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\systemsettingsadminflows.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\tttracer.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\utcdecoderhost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\workfolders.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wpcmon.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

