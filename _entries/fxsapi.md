---
Name: fxsapi.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSTEM32%\driverstore\filerepository\prnms002.inf_%VERSION%\amd64'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\fxsunatd.exe'
  Type: Sideloading
  AutoElevate: true
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---
