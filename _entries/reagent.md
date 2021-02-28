---
Name: reagent.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bootim.exe"
- Path: "%SYSTEM32%\\reagentc.exe"
- Path: "%SYSTEM32%\\recdisc.exe"
- Path: "%SYSTEM32%\\relpost.exe"
- Path: "%SYSTEM32%\\resetengine.exe"
- Path: "%SYSTEM32%\\sdclt.exe"
- Path: "%SYSTEM32%\\systemreset.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
