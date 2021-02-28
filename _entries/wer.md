---
Name: wer.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\dwwin.exe"
- Path: "%SYSTEM32%\\msdt.exe"
- Path: "%SYSTEM32%\\pcalua.exe"
- Path: "%SYSTEM32%\\relpost.exe"
- Path: "%SYSTEM32%\\rstrui.exe"
- Path: "%SYSTEM32%\\sdclt.exe"
- Path: "%SYSTEM32%\\srtasks.exe"
- Path: "%SYSTEM32%\\wbengine.exe"
- Path: "%SYSTEM32%\\werfault.exe"
- Path: "%SYSTEM32%\\werfaultsecure.exe"
- Path: "%SYSTEM32%\\wermgr.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
