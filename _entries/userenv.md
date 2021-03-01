---
Name: userenv.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bdeuisrv.exe"
- Path: "%SYSTEM32%\\colorcpl.exe"
- Path: "%SYSTEM32%\\dccw.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\deviceenroller.exe"
- Path: "%SYSTEM32%\\dmomacpmo.exe"
- Path: "%SYSTEM32%\\dsregcmd.exe"
- Path: "%SYSTEM32%\\efsui.exe"
- Path: "%SYSTEM32%\\gpupdate.exe"
- Path: "%SYSTEM32%\\mdmappinstaller.exe"
- Path: "%SYSTEM32%\\mdmdiagnosticstool.exe"
- Path: "%SYSTEM32%\\microsoftedgebchost.exe"
- Path: "%SYSTEM32%\\microsoftedgecp.exe"
- Path: "%SYSTEM32%\\microsoftedgesh.exe"
- Path: "%SYSTEM32%\\msra.exe"
- Path: "%SYSTEM32%\\musnotification.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\omadmclient.exe"
- Path: "%SYSTEM32%\\rekeywiz.exe"
- Path: "%SYSTEM32%\\securityhealthservice.exe"
- Path: "%SYSTEM32%\\settingsynchost.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\tttracer.exe"
- Path: "%SYSTEM32%\\utcdecoderhost.exe"
- Path: "%SYSTEM32%\\workfolders.exe"
- Path: "%SYSTEM32%\\wpcmon.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
