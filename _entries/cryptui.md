---
Name: cryptui.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\certutil.exe"
- Path: "%SYSTEM32%\\efsui.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\rekeywiz.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
