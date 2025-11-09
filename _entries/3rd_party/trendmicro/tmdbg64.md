---
Name: tmdbg64.dll
Author: Still Hsu
Created: 2025-11-05
Vendor: Trend Micro
ExpectedLocations:
  - '%LOCALAPPDATA%\Temp\ClnExtor\PCCNT'
  - '%PROGRAMFILES%\Trend Micro\Security Agent'
ExpectedVersionInformation:
  - CompanyName: 'Trend Micro Inc.'
    FileDescription: 'TmDbgLog Dynamic Link Library'
    FileVersion: '17.50.0.1461'
    InternalName: 'TmDbgLog'
    LegalCopyright: 'Copyright (C) 1995-2009 Trend Micro Incorporated. All rights reserved.'
    OriginalFilename: 'TmDbgLog.dll'
    ProductName: 'Trend Micro Internet Security'
    ProductVersion: '17.50'
ExpectedSignatureInformation:
  - Type: Authenticode
    Subject: CN=Symantec Time Stamping Services CA - G2,O=Symantec Corporation,C=US
    Issuer: CN=Thawte Timestamping CA,OU=Thawte Certification,O=Thawte,L=Durbanville,ST=Western Cape,C=ZA
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Trend Micro\Security Agent\TmPfw.exe'
    Type: 'Sideloading'
    SHA256:
      - d54232565d5ed24955a9e7dbed5322ff4df26fa49bc5aff5cee698bb3608609f
    ExpectedVersionInformation:
      - CompanyName: 'Trend Micro Inc.'
        FileDescription: 'Trend Micro Personal Firewall Service'
        FileVersion: '5.83.0.1060'
        InternalName: 'TmPfw'
        LegalCopyright: 'Copyright (C) 2015-2018 Trend Micro Incorporated. All rights reserved.'
        OriginalFilename: 'TmPfw.exe'
        ProductName: 'Trend Micro Network Security Components'
        ProductVersion: '5.83'
    ExpectedSignatureInformation:
      - Type: Authenticode
        Subject: CN=Symantec Time Stamping Services CA - G2,O=Symantec Corporation,C=US
        Issuer: CN=Thawte Timestamping CA,OU=Thawte Certification,O=Thawte,L=Durbanville,ST=Western Cape,C=ZA
Resources:
  - https://www.virustotal.com/gui/file/5ee36bf41e2604db18a46515139d0c7bee9a6665e968d4b281cac329e26163d0
Acknowledgements:
  - Name: 'Still Hsu'
    Twitter: '@AzakaSekai_'
---

