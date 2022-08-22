---
Name: credui.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\efsui.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fxssvc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\gpfixup.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\licmgr.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mstsc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netdom.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\nlbmgr.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\perfmon.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\rekeywiz.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\rpcping.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\runas.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\systempropertiesadvanced.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\taskmgr.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\wbadmin.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wfs.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wkspbroker.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\rasphone.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://wietze.github.io/blog/save-the-environment-variables
- https://securityintelligence.com/posts/windows-features-dll-sideloading/
- https://github.com/xforcered/WFH
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
- Name: Chris Spehn
  Twitter: "@ConsciousHacker"
---

