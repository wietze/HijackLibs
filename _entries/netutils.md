---
Name: netutils.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\at.exe"
- Path: "%SYSTEM32%\\certutil.exe"
- Path: "%SYSTEM32%\\change.exe"
- Path: "%SYSTEM32%\\chglogon.exe"
- Path: "%SYSTEM32%\\chgport.exe"
- Path: "%SYSTEM32%\\devicecensus.exe"
- Path: "%SYSTEM32%\\deviceenroller.exe"
- Path: "%SYSTEM32%\\djoin.exe"
- Path: "%SYSTEM32%\\dpapimig.exe"
- Path: "%SYSTEM32%\\driverquery.exe"
- Path: "%SYSTEM32%\\dsregcmd.exe"
- Path: "%SYSTEM32%\\easinvoker.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\edpcleanup.exe"
- Path: "%SYSTEM32%\\efsui.exe"
- Path: "%SYSTEM32%\\eventcreate.exe"
- Path: "%SYSTEM32%\\getmac.exe"
- Path: "%SYSTEM32%\\gpresult.exe"
- Path: "%SYSTEM32%\\ie4uinit.exe"
- Path: "%SYSTEM32%\\ksetup.exe"
- Path: "%SYSTEM32%\\mshta.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\net.exe"
- Path: "%SYSTEM32%\\net1.exe"
- Path: "%SYSTEM32%\\netplwiz.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\nltest.exe"
- Path: "%SYSTEM32%\\openfiles.exe"
- Path: "%SYSTEM32%\\query.exe"
- Path: "%SYSTEM32%\\quser.exe"
- Path: "%SYSTEM32%\\qwinsta.exe"
- Path: "%SYSTEM32%\\raserver.exe"
- Path: "%SYSTEM32%\\rekeywiz.exe"
- Path: "%SYSTEM32%\\reset.exe"
- Path: "%SYSTEM32%\\rwinsta.exe"
- Path: "%SYSTEM32%\\spaceagent.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\taskkill.exe"
- Path: "%SYSTEM32%\\tasklist.exe"
- Path: "%SYSTEM32%\\tscon.exe"
- Path: "%SYSTEM32%\\tskill.exe"
- Path: "%SYSTEM32%\\w32tm.exe"
- Path: "%SYSTEM32%\\waitfor.exe"
- Path: "%SYSTEM32%\\wbengine.exe"
- Path: "%SYSTEM32%\\whoami.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
