---
Name: bcd.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bootim.exe"
- Path: "%SYSTEM32%\\genvalobj.exe"
- Path: "%SYSTEM32%\\mdsched.exe"
- Path: "%SYSTEM32%\\msconfig.exe"
- Path: "%SYSTEM32%\\recdisc.exe"
- Path: "%SYSTEM32%\\resetengine.exe"
- Path: "%SYSTEM32%\\rstrui.exe"
- Path: "%SYSTEM32%\\sdclt.exe"
- Path: "%SYSTEM32%\\srtasks.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
- Path: "%SYSTEM32%\\systempropertiescomputername.exe"
- Path: "%SYSTEM32%\\systempropertiesdataexecutionprevention.exe"
- Path: "%SYSTEM32%\\systempropertieshardware.exe"
- Path: "%SYSTEM32%\\systempropertiesprotection.exe"
- Path: "%SYSTEM32%\\systempropertiesremote.exe"
- Path: "%SYSTEM32%\\systemreset.exe"
- Path: "%SYSTEM32%\\vds.exe"
- Path: "%SYSTEM32%\\vdsldr.exe"
- Path: "%SYSTEM32%\\vssvc.exe"
- Path: "%SYSTEM32%\\wbengine.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
