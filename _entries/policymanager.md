---
Name: policymanager.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\displayswitch.exe"
- Path: "%SYSTEM32%\\easpolicymanagerbrokerhost.exe"
- Path: "%SYSTEM32%\\edpcleanup.exe"
- Path: "%SYSTEM32%\\eduprintprov.exe"
- Path: "%SYSTEM32%\\hvsievaluator.exe"
- Path: "%SYSTEM32%\\mdmdiagnosticstool.exe"
- Path: "%SYSTEM32%\\omadmclient.exe"
- Path: "%SYSTEM32%\\settingsynchost.exe"
- Path: "%SYSTEM32%\\workfolders.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
