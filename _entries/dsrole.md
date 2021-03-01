---
Name: dsrole.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\certutil.exe"
- Path: "%SYSTEM32%\\cipher.exe"
- Path: "%SYSTEM32%\\efsui.exe"
- Path: "%SYSTEM32%\\net1.exe"
- Path: "%SYSTEM32%\\netplwiz.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\rekeywiz.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\winrs.exe"
- Path: "%SYSTEM32%\\wsmanhttpconfig.exe"
- Path: "%SYSTEM32%\\wsmprovhost.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
