---
Name: fltlib.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\agentservice.exe"
- Path: "%SYSTEM32%\\bootim.exe"
- Path: "%SYSTEM32%\\compmgmtlauncher.exe"
- Path: "%SYSTEM32%\\dpiscaling.exe"
- Path: "%SYSTEM32%\\fltmc.exe"
- Path: "%SYSTEM32%\\psr.exe"
- Path: "%SYSTEM32%\\resmon.exe"
- Path: "%SYSTEM32%\\sdclt.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\slui.exe"
- Path: "%SYSTEM32%\\vssvc.exe"
- Path: "%SYSTEM32%\\wbengine.exe"
- Path: "%SYSTEM32%\\workfolders.exe"
- Path: "%SYSTEM32%\\write.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
