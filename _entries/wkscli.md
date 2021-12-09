---
Name: wkscli.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\djoin.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dsregcmd.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\edpcleanup.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\getmac.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\ie4uinit.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mshta.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mstsc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\net.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\net1.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\systempropertiesadvanced.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\systemsettingsadminflows.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\whoami.exe'
  Type: Sideloading
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
