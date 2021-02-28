---
Name: samcli.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\certutil.exe"
- Path: "%SYSTEM32%\\change.exe"
- Path: "%SYSTEM32%\\chglogon.exe"
- Path: "%SYSTEM32%\\chgport.exe"
- Path: "%SYSTEM32%\\deviceenroller.exe"
- Path: "%SYSTEM32%\\dpapimig.exe"
- Path: "%SYSTEM32%\\easinvoker.exe"
- Path: "%SYSTEM32%\\net.exe"
- Path: "%SYSTEM32%\\net1.exe"
- Path: "%SYSTEM32%\\netplwiz.exe"
- Path: "%SYSTEM32%\\query.exe"
- Path: "%SYSTEM32%\\quser.exe"
- Path: "%SYSTEM32%\\qwinsta.exe"
- Path: "%SYSTEM32%\\raserver.exe"
- Path: "%SYSTEM32%\\reset.exe"
- Path: "%SYSTEM32%\\rwinsta.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
- Path: "%SYSTEM32%\\tscon.exe"
- Path: "%SYSTEM32%\\tskill.exe"
- Path: "%SYSTEM32%\\wpcmon.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
