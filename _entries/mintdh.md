---
Name: mintdh.dll
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\applytrustoffline.exe"
  Type: Sideloading
- Path: "%SYSTEM32%\\netsh.exe"
  Type: Sideloading
- Path: "%SYSTEM32%\\pktmon.exe"
  Type: Sideloading
- Path: "%SYSTEM32%\\plasrv.exe"
  Type: Sideloading

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
