---
Name: mintdh.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\applytrustoffline.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\pktmon.exe"
- Path: "%SYSTEM32%\\plasrv.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
