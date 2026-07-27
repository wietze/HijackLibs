---
Name: libcrypto-3-x64.dll
Author: Harry Godridge - HuntressLabs
Created: 2026-07-15
Vendor: VMware
ExpectedLocations:
  - '%PROGRAMFILES%\VMware\VMware Workstation\x64'
  - '%PROGRAMFILES%\VMware\VMware Workstation'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\VMware\VMware Workstation\x64\vmware-vmx.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: vmware-vmx.exe
        FileDescription: VMware Workstation VMX
    SHA256:
      - '745870f6b3e20e1cd5c022f2813f28bbd04195fc93f9f4a42f73719a43db9463'
Resources:
  - https://www.virustotal.com/gui/file/4037e6f00a09839d398ffc322abf4ef34facb7ece4dae4a011fa72fc6492c78f
Acknowledgements:
  - Name: Harry Godridge
    Company: Huntress
    Twitter: '@InfoSecHarry'
  - Name: Josh Allman
    Company: Huntress
    Twitter: '@xorjosh'
---

