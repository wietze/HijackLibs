---
Name: srclient.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\srtasks.exe"
  Type: Relative Path
- Path: "%SYSTEM32%\\tiworker.exe"
  Type: Phantom
  Condition: Windows Server 2012

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://blog.vonahi.io/srclient-dll-hijacking/
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
