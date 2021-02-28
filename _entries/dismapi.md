---
Name: dismapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bootim.exe"
- Path: "%SYSTEM32%\\deploymentcsphelper.exe"
- Path: "%SYSTEM32%\\hvsievaluator.exe"
- Path: "%SYSTEM32%\\resetengine.exe"
- Path: "%SYSTEM32%\\systemreset.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
