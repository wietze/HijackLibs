---
Name: iphlpapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\arp.exe"
- Path: "%SYSTEM32%\\colorcpl.exe"
- Path: "%SYSTEM32%\\datausagelivetiletask.exe"
- Path: "%SYSTEM32%\\devicecensus.exe"
- Path: "%SYSTEM32%\\dnscacheugc.exe"
- Path: "%SYSTEM32%\\fxscover.exe"
- Path: "%SYSTEM32%\\fxssvc.exe"
- Path: "%SYSTEM32%\\fxsunatd.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\msra.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\nbtstat.exe"
- Path: "%SYSTEM32%\\net.exe"
- Path: "%SYSTEM32%\\netbtugc.exe"
- Path: "%SYSTEM32%\\netiougc.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\netstat.exe"
- Path: "%SYSTEM32%\\omadmclient.exe"
- Path: "%SYSTEM32%\\pathping.exe"
- Path: "%SYSTEM32%\\printbrmui.exe"
- Path: "%SYSTEM32%\\printui.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\rdpclip.exe"
- Path: "%SYSTEM32%\\route.exe"
- Path: "%SYSTEM32%\\tracert.exe"
- Path: "%SYSTEM32%\\w32tm.exe"
- Path: "%SYSTEM32%\\wfs.exe"
- Path: "%SYSTEM32%\\wifitask.exe"
- Path: "%SYSTEM32%\\wpnpinst.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
