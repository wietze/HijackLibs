---
Name: samlib.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\dpapimig.exe"
- Path: "%SYSTEM32%\\easinvoker.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\netplwiz.exe"
  AutoElevate: True

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
