---
Name: atl.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\msconfig.exe"
- Path: "%SYSTEM32%\\msdt.exe"
- Path: "%SYSTEM32%\\msinfo32.exe"
- Path: "%SYSTEM32%\\perfmon.exe"
- Path: "%SYSTEM32%\\quickassist.exe"
- Path: "%SYSTEM32%\\vds.exe"
- Path: "%SYSTEM32%\\vdsldr.exe"
- Path: "%SYSTEM32%\\vssadmin.exe"
- Path: "%SYSTEM32%\\wfs.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
