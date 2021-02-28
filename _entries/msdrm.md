---
Name: msdrm.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\gamepanel.exe"
- Path: "%SYSTEM32%\\psr.exe"
- Path: "%SYSTEM32%\\rmactivate.exe"
- Path: "%SYSTEM32%\\rmactivate_isv.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
