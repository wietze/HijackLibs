---
Name: firewallapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\checknetisolation.exe"
- Path: "%SYSTEM32%\\edpcleanup.exe"
- Path: "%SYSTEM32%\\lpremove.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\securityhealthservice.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
