---
Name: tedutil.dll
Author: Jai Minton - HuntressLabs
Created: 2024-04-15
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Microsoft SDKs\Windows\%VERSION%\Bin'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Microsoft SDKs\Windows\%VERSION%\Bin\TopoEdit.exe'
    Type: Sideloading
    SHA256:
      - 'b874e5abdd7c008d47560fda4e84db893ac63c18c3a5a450d25f4e62ed8e8d8c'
Resources:
  - https://asec.ahnlab.com/en/58319/
  - https://www.virustotal.com/gui/file/eb014e37fdcaf42c93f606058896ccb47eed56be5e1701c7b9744bac0003a8e8/details
  - https://learn.microsoft.com/en-us/windows/win32/medfound/topoedit-modules
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

