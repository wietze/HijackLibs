---
Name: fnp_act_installer.dll
Author: Jai Minton - HuntressLabs
Created: 2024-04-15
Vendor: Flexera
ExpectedLocations:
  - '%PROGRAMFILES%\InstallShield\%VERSION%\System'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\InstallShield\%VERSION%\System\TSConfig.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - FileDescription: InstallShield Activation Wizard
    SHA256:
      - 'b5f9377bd27fcf48fb3d81d0196021681739f42a198e8340c27d55192d4bd3ac'
Resources:
  - https://asec.ahnlab.com/en/58319/
  - https://www.virustotal.com/gui/file/e7b69768215453b2c648d7060161ce9b9eaf1ace631eb2ac11b60a7195e2263e
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

