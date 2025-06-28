---
Name: epnsm.dll
Author: Jai Minton
Created: 2025-05-06
Vendor: seiko
ExpectedLocations:
  - '%PROGRAMFILES%\Epson Software\Document Capture Server'
  - '%PROGRAMFILES%\Epson Software\Event Manager'
ExpectedVersionInformation:
  - CompanyName: 'SEIKO EPSON CORPORATION'
    FileDescription: 'Epson Net Scan Monitor'
    FileVersion: '3.0.1.0'
    LegalCopyright: 'Copyright(C) SEIKO EPSON CORP. 2004-2023'
    OriginalFilename: 'EPNSM.DLL'
    ProductName: 'EPSON Net Scan Monitor'
    ProductVersion: '3.0.1.0'
ExpectedSignatureInformation:
  - Type: Authenticode
    Subject: CN=SEIKO EPSON CORPORATION,O=SEIKO EPSON CORPORATION,L=Suwa-Shi,ST=Nagano,C=JP
    Issuer: CN=DigiCert Trusted G4 Code Signing RSA4096 SHA384 2021 CA1,O=DigiCert\, Inc.,C=US
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Epson Software\Document Capture Server\EEventManager.exe'
    Type: 'Sideloading'
    SHA256:
      - 88760201ada655d230fb40988bb50fdd46b152c9407565d0a4081d4540c0ac01
    ExpectedVersionInformation:
      - CompanyName: 'Seiko Epson Corporation'
        FileDescription: 'Epson Event Manager'
        FileVersion: '3.11.58.0'
        InternalName: 'EEventManager'
        LegalCopyright: 'Copyright (C) Seiko Epson Corporation 2003-2022, All rights reserved.'
        OriginalFilename: 'EEventManager.EXE'
        ProductName: 'Epson Event Manager'
        ProductVersion: '3.11.58.0'
    ExpectedSignatureInformation:
      - Type: Authenticode
        Subject: CN=SEIKO EPSON CORPORATION,O=SEIKO EPSON CORPORATION,L=Suwa-Shi,ST=Nagano,C=JP
        Issuer: CN=DigiCert Trusted G4 Code Signing RSA4096 SHA384 2021 CA1,O=DigiCert\, Inc.,C=US
Resources:
  - https://www.virustotal.com/gui/file/d70cd4df89b101f34ea6b17bc07a88b096bae2220fb04e200443b09a2b681091/relations
  - https://www.virustotal.com/gui/file/8313f3970982cbd425a0c769c8a690fef456d31d321c7de1e588e572948afed9/details
Acknowledgements:
  - Name: 'Jai Minton'
    Company: 'Huntress'
    Twitter: '@CyberRaiju'
---

