---
Name: autorun.dll
Author: Wietze Beukema
Created: 2026-06-14
Vendor: Microsoft
# ExpectedLocations: this file exists in Microsoft Windows ISOs.
VulnerableExecutables:
  - Path: 'setup.exe'
    Type: Sideloading
    SHA256:
      - 30043368051ccaad512558f0c08a3f3da57f15967f38a76208f64eff06ee8043
    Condition: autorun.dll should be in a subfolder called "sources".
Resources:
  - https://www.microsoft.com/security/blog/2026/05/26/poisoned-search-results-gpu-mining-cryptojacking-campaign-abusing-screenconnect-microsoft-net-utilities/
  - https://www.virustotal.com/gui/file/2ee93ccbcd49ed94c65dcf52e7dcb8f0fa0a443ca24c0e0c7f79152efba657b7
---

