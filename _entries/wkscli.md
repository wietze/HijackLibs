---
Name: wkscli.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\djoin.exe"
- Path: "%SYSTEM32%\\dsregcmd.exe"
- Path: "%SYSTEM32%\\edpcleanup.exe"
- Path: "%SYSTEM32%\\getmac.exe"
- Path: "%SYSTEM32%\\ie4uinit.exe"
- Path: "%SYSTEM32%\\mshta.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\net.exe"
- Path: "%SYSTEM32%\\net1.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
- Path: "%SYSTEM32%\\whoami.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
