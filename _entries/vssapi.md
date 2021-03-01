---
Name: vssapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bootim.exe"
- Path: "%SYSTEM32%\\resetengine.exe"
- Path: "%SYSTEM32%\\rstrui.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\sdclt.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\srtasks.exe"
- Path: "%SYSTEM32%\\systemreset.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\vssadmin.exe"
- Path: "%SYSTEM32%\\vssvc.exe"
- Path: "%SYSTEM32%\\wbengine.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
