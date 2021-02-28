---
Name: fveapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\baaupdate.exe"
- Path: "%SYSTEM32%\\bdechangepin.exe"
- Path: "%SYSTEM32%\\fvenotify.exe"
- Path: "%SYSTEM32%\\fveprompt.exe"
- Path: "%SYSTEM32%\\resetengine.exe"
- Path: "%SYSTEM32%\\systemreset.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
