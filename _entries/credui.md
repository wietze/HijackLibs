---
Name: credui.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\efsui.exe"
- Path: "%SYSTEM32%\\fxssvc.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\perfmon.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\rekeywiz.exe"
- Path: "%SYSTEM32%\\rpcping.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\taskmgr.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\wbadmin.exe"
- Path: "%SYSTEM32%\\wfs.exe"
- Path: "%SYSTEM32%\\wkspbroker.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
