---
Name: srvcli.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\change.exe"
- Path: "%SYSTEM32%\\chglogon.exe"
- Path: "%SYSTEM32%\\chgport.exe"
- Path: "%SYSTEM32%\\driverquery.exe"
- Path: "%SYSTEM32%\\eventcreate.exe"
- Path: "%SYSTEM32%\\getmac.exe"
- Path: "%SYSTEM32%\\gpresult.exe"
- Path: "%SYSTEM32%\\ksetup.exe"
- Path: "%SYSTEM32%\\net.exe"
- Path: "%SYSTEM32%\\net1.exe"
- Path: "%SYSTEM32%\\openfiles.exe"
- Path: "%SYSTEM32%\\query.exe"
- Path: "%SYSTEM32%\\quser.exe"
- Path: "%SYSTEM32%\\qwinsta.exe"
- Path: "%SYSTEM32%\\reset.exe"
- Path: "%SYSTEM32%\\rwinsta.exe"
- Path: "%SYSTEM32%\\spaceagent.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
- Path: "%SYSTEM32%\\taskkill.exe"
- Path: "%SYSTEM32%\\tasklist.exe"
- Path: "%SYSTEM32%\\tscon.exe"
- Path: "%SYSTEM32%\\tskill.exe"
- Path: "%SYSTEM32%\\waitfor.exe"
- Path: "%SYSTEM32%\\wbengine.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
