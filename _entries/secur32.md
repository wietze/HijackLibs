---
Name: secur32.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\calc.exe"
- Path: "%SYSTEM32%\\computerdefaults.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\fodhelper.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\gpresult.exe"
- Path: "%SYSTEM32%\\klist.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
