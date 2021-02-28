---
Name: windowscodecs.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\certreq.exe"
- Path: "%SYSTEM32%\\osk.exe"
- Path: "%SYSTEM32%\\quickassist.exe"
- Path: "%SYSTEM32%\\wmpdmc.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
