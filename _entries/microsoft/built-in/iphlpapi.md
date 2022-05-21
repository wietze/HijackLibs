---
Name: iphlpapi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\arp.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\colorcpl.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\datausagelivetiletask.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\devicecensus.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dnscacheugc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fxscover.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fxssvc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fxsunatd.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\msra.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mstsc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\nbtstat.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\net.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netbtugc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netiougc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netsh.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netstat.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\omadmclient.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\pathping.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\printbrmui.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\printui.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\rdpclip.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\route.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\tracert.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\w32tm.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wfs.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wifitask.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wpnpinst.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dpiscaling.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\rasphone.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\slui.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://wietze.github.io/blog/save-the-environment-variables
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

