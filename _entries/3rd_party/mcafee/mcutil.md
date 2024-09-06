---
Name: mcutil.dll
Author: Jai Minton - HuntressLabs
Created: 2024-08-07
Vendor: McAfee
ExpectedLocations:
  - '%PROGRAMFILES%\McAfee Inc.\McAfee Total Protection 2009'
VulnerableExecutables:
  - Path: 'mcoemcpy.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: mcoemcpy.exe
        InternalName: mcoemcpy
        FileDescription: McAfee OEM Info Copy Files
    SHA256:
      - 3124fcb79da0bdf9d0d1995e37b06f7929d83c1c4b60e38c104743be71170efe
Resources:
  - https://www.virustotal.com/gui/file/3bcb28d19a779b6da0c42c1506cd1908f9bcceeffff45f572677e032551f9a96/relations
  - https://www.virustotal.com/gui/file/b0263de0622050091a0fbf06428229e5da291b87926ca29c8ee3b01a2a514e4f/detection
  - https://web-assets.esetstatic.com/wls/2018/03/ESET_OceanLotus.pdf
  - https://www.huntress.com/blog/advanced-persistent-threat-targeting-vietnamese-human-rights-defenders
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
  - Name: Craig Sweeney
    Company: Huntress
    Twitter: '@bumbucha'
---

