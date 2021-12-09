---
Name: ssshim.dll
Author: Wietze Beukema
Created: 2021-02-28
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\sfc.exe'
  Type: Sideloading
  AutoElevate: true
  Condition: Parameters of `/scanfile=`, `/offbootdir` and `/offwindir` required
Resources:
- https://twitter.com/0gtweet/status/1363107343018385410
Acknowledgements:
- Name: Grzegorz Tworek
  Twitter: '@0gtweet'
---

