---
Name: midlrtmd.dll
Author: Rick Gatenby
Created: 2026-02-03
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Windows Kits\%VERSION%\bin\%VERSION%\x64\mdmerge.exe'
  - '%PROGRAMFILES%\Windows Kits\%VERSION%\bin\%VERSION%\x86\mdmerge.exe'
VulnerableExecutables:
  - Path: 'mdmerge.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: 'mdmerge.exe'
        FileDescription: 'Microsoft MDMERGE Utility'
    SHA256:
      - ac9f2ae9de5126691b9391c990f9d4f1c25afa912fbfda2d4abfe9f9057bdd8c
Resources:
  - https://www.crowdstrike.com/en-us/blog/new-supply-chain-attack-leverages-comm100-chat-installer
  - https://jsac.jpcert.or.jp/archive/2024/pdf/JSAC2024_1_7_hara_nakajima_kawakami_en.pdf
  - https://x.com/Cyberteam008/status/1858703453981450712
Acknowledgements:
  - Name: Rick Gatenby
    Company: CyberCX
---

