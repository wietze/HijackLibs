---
Name: ssshim.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-28

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\sfc.exe"
  AutoElevate: True
  Condition: Parameters of `/scanfile=`, `/offbootdir` and `/offwindir` required

Resources:
- https://twitter.com/0gtweet/status/1363107343018385410
Acknowledgements:
- Name: Grzegorz Tworek
  Twitter: "@0gtweet"
---
