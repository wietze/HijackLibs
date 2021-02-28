---
Name: wininet.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\calc.exe"
- Path: "%SYSTEM32%\\certreq.exe"
- Path: "%SYSTEM32%\\computerdefaults.exe"
- Path: "%SYSTEM32%\\dsregcmd.exe"
- Path: "%SYSTEM32%\\fodhelper.exe"
- Path: "%SYSTEM32%\\ie4uinit.exe"
- Path: "%SYSTEM32%\\mdmdiagnosticstool.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\presentationhost.exe"
- Path: "%SYSTEM32%\\quickassist.exe"
- Path: "%SYSTEM32%\\wkspbroker.exe"
- Path: "%SYSTEM32%\\wksprt.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
