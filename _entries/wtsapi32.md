---
Name: wtsapi32.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bdeuisrv.exe"
- Path: "%SYSTEM32%\\magnify.exe"
- Path: "%SYSTEM32%\\mdmappinstaller.exe"
- Path: "%SYSTEM32%\\raserver.exe"
- Path: "%SYSTEM32%\\rdpclip.exe"
- Path: "%SYSTEM32%\\rdpshell.exe"
- Path: "%SYSTEM32%\\rdvghelper.exe"
- Path: "%SYSTEM32%\\sdclt.exe"
- Path: "%SYSTEM32%\\securityhealthservice.exe"
- Path: "%SYSTEM32%\\slui.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
- Path: "%SYSTEM32%\\wusa.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
