---
Name: tapi32.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\dialer.exe"
- Path: "%SYSTEM32%\\fxssvc.exe"
- Path: "%SYSTEM32%\\tcmsetup.exe"
  AutoElevate: True

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
