---
Name: devrtl.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\drvinst.exe"
- Path: "%SYSTEM32%\\pnpunattend.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
- Path: "%SYSTEM32%\\wowreg32.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
