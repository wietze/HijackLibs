---
Name: pdh.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\plasrv.exe"
- Path: "%SYSTEM32%\\relog.exe"
- Path: "%SYSTEM32%\\taskmgr.exe"
- Path: "%SYSTEM32%\\typeperf.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
