---
Name: apphelp.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\compmgmtlauncher.exe'
  Type: Sideloading
- Path: '%WINDIR%\explorer.exe'
  Type: Search Order
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

