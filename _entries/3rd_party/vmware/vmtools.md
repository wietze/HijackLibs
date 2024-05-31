---
Name: vmtools.dll
Author: Jai Minton - HuntressLabs
Created: 2024-05-27
Vendor: VMWare
ExpectedLocations:
  - '%PROGRAMFILES%\VMware\VMware Tools'
  - '%PROGRAMFILES%\VMware\VMware Workstation'
  - '%PROGRAMFILES%\VMware\VMware Player'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\VMware\VMware Tools\rvmSetup.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: rvmSetup.exe
        InternalName: rvmSetup
        FileDescription: VMware RVM Setup Service
    SHA256:
      - 0e6f5eaa2cd91747213f6aec05e3de6fb46ea2b7cf4d5f3ac267128abc784d00
Resources:
  - https://www.virustotal.com/gui/file/a3d340480fc015cd7c548fccad9218222c37178af95727b612d768d8e4b24964/details
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

