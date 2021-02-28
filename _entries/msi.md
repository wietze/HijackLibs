---
Name: msi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\dxpserver.exe"
- Path: "%SYSTEM32%\\fondue.exe"
- Path: "%SYSTEM32%\\mdmappinstaller.exe"
- Path: "%SYSTEM32%\\msiexec.exe"
- Path: "%SYSTEM32%\\optionalfeatures.exe"
- Path: "%SYSTEM32%\\packageinspector.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
