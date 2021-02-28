---
Name: rasapi32.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\cmdl32.exe"
- Path: "%SYSTEM32%\\nethost.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\rasdial.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
