---
Name: dbgcore.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\deploymentcsphelper.exe"
- Path: "%SYSTEM32%\\djoin.exe"
- Path: "%SYSTEM32%\\dnscacheugc.exe"
- Path: "%SYSTEM32%\\ieunatt.exe"
- Path: "%SYSTEM32%\\muiunattend.exe"
- Path: "%SYSTEM32%\\netbtugc.exe"
- Path: "%SYSTEM32%\\netiougc.exe"
- Path: "%SYSTEM32%\\pnpunattend.exe"
- Path: "%SYSTEM32%\\setupugc.exe"
- Path: "%SYSTEM32%\\systemreset.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\werfault.exe"
- Path: "%SYSTEM32%\\werfaultsecure.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
