---
Name: ntdsapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\certutil.exe"
- Path: "%SYSTEM32%\\cipher.exe"
- Path: "%SYSTEM32%\\gpresult.exe"
- Path: "%SYSTEM32%\\nltest.exe"
- Path: "%SYSTEM32%\\w32tm.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
