---
Name: webservices.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\clipup.exe"
- Path: "%SYSTEM32%\\sppsvc.exe"
- Path: "%SYSTEM32%\\wifitask.exe"
- Path: "%SYSTEM32%\\wksprt.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
