---
Name: dnsapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\checknetisolation.exe"
- Path: "%SYSTEM32%\\edpcleanup.exe"
- Path: "%SYSTEM32%\\lpremove.exe"
- Path: "%SYSTEM32%\\msdtc.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\nslookup.exe"
- Path: "%SYSTEM32%\\securityhealthservice.exe"
- Path: "%SYSTEM32%\\setupugc.exe"
- Path: "%SYSTEM32%\\spoolsv.exe"
- Path: "%SYSTEM32%\\sppextcomobj.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
- Path: "%SYSTEM32%\\tieringengineservice.exe"
- Path: "%SYSTEM32%\\wbengine.exe"
- Path: "%SYSTEM32%\\wkspbroker.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
