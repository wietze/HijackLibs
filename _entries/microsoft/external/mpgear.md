---
Name: mpgear.dll
Author: Jai Minton - HuntressLabs
Created: 2024-04-15
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Windows Defender Advanced Threat Protection\Classification'
  - '%SYSTEM32%\MRT\%VERSION%'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Windows Defender Advanced Threat Protection\Classification\SenseCE.exe'
    Type: Sideloading
    SHA256:
      - '8dc4d5deef19fb4da195c270819a6ee283b67408fc9ee187216a0ce80ee61bab'
Resources:
  - https://asec.ahnlab.com/en/58319/
  - https://www.virustotal.com/gui/file/1643a9c54e5d730fb0ebf4ab49e6c1d3a09dcd2c3a0282674330346d90990ab0
  - https://www.virustotal.com/gui/file/e1316301e7904a415fdd2a1707d1a48220cce055aab17b36a48e67bf0369edba
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

