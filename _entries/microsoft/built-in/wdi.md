---
Name: wdi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\cofire.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\msra.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netsh.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dpiscaling.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\slui.exe'
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

