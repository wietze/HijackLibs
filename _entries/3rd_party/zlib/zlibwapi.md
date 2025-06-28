---
Name: zlibwapi.dll
Author: Still Hsu
Created: 2024-11-24
Vendor: zlib
ExpectedLocations:
  - '%PROGRAMFILES%\DS Clock'
VulnerableExecutables:
- Path: '%PROGRAMFILES%\DS Clock\dsclock.exe'
  Type: Sideloading
  ExpectedVersionInformation:
  - FileDescription: DS Clock
    LegalCopyright: Copyright 2001-2023 Duality Software. All rights reserved. Developed by Vladimir Kulemin.
    InternalName: dsclock.exe
    OriginalFilename: dsclock.exe
    ProductName: DS Clock
    ProductVersion: 5.1.2.0
  ExpectedSignatureInformation:
  - Subject: CN=Duality Software LLC, O=Duality Software LLC, L=Saint Petersburg, S=Saint Petersburg, C=RU
    Issuer: CN=GlobalSign GCC R45 CodeSigning CA 2020, O=GlobalSign nv-sa, C=BE
    Type: Authenticode
  SHA256:
  - f85ce4492e1354f8310027c5f70ef73aae654fcd8fd9a58034e4f82a41a9826b
Resources:
  - https://twitter.com/malwrhunterteam/status/1859316170773397966
  - https://www.virustotal.com/gui/file/b8d38fc9f4560719fa64227e4b25b732b22602cb596d44cb38418a196c3340be
  - https://github.com/Still34/malware-lab/tree/main/reworkshop/2024-11-24
Acknowledgements:
  - Name: MalwareHunterTeam
    Twitter: '@malwrhunterteam'
  - Name: Still Hsu
    Twitter: '@AzakaSekai_'
---

