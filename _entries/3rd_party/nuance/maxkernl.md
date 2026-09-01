---
Name: maxkernl.dll
Author: Harry Godridge - HuntressLabs
Created: 2026-08-27
Vendor: Nuance
ExpectedLocations:
  - '%PROGRAMFILES%\Nuance\PaperPort'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Nuance\PaperPort\PPScanMg.exe'
    Type: Sideloading
    SHA256:
      - '33b9c9d312599096ff03e7111501d8c10624d3471f62180767b965b9cfaafc82'
    ExpectedVersionInformation:
      - FileDescription: 'PaperPort Scan Manager'
        FileVersion: '14.5.15069.1503'
        InternalName: 'PPScanMg'
        LegalCopyright: '(c) 1995-2015, Nuance Communications, Inc.'
        OriginalFilename: 'PPScanMg.exe'
        ProductName: 'PaperPort'
    ExpectedSignatureInformation:
      - Type: Authenticode
        Subject: 'CN="Nuance Communications, Inc."'
        Issuer: 'CN=Go Daddy Secure Certification Authority'
Acknowledgements:
  - Name: Harry Godridge
    Company: Huntress
    Twitter: '@InfoSecHarry'
---

