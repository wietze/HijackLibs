---
Name: sppc.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\msinfo32.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\packageinspector.exe"
- Path: "%SYSTEM32%\\slui.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
