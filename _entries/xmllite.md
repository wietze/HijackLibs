---
Name: xmllite.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\certreq.exe"
- Path: "%SYSTEM32%\\ddodiag.exe"
- Path: "%SYSTEM32%\\deviceenroller.exe"
- Path: "%SYSTEM32%\\dmcfghost.exe"
- Path: "%SYSTEM32%\\dmclient.exe"
- Path: "%SYSTEM32%\\dmomacpmo.exe"
- Path: "%SYSTEM32%\\dxpserver.exe"
- Path: "%SYSTEM32%\\mdmdiagnosticstool.exe"
- Path: "%SYSTEM32%\\musnotificationux.exe"
- Path: "%SYSTEM32%\\musnotifyicon.exe"
- Path: "%SYSTEM32%\\omadmclient.exe"
- Path: "%SYSTEM32%\\psr.exe"
- Path: "%SYSTEM32%\\resetengine.exe"
- Path: "%SYSTEM32%\\sppsvc.exe"
- Path: "%SYSTEM32%\\systemreset.exe"
- Path: "%SYSTEM32%\\upfc.exe"
- Path: "%SYSTEM32%\\usocoreworker.exe"
- Path: "%SYSTEM32%\\wbengine.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
