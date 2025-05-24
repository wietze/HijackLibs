---
Name: qt5network.dll
Author: Jai Minton
Created: 2025-05-09
Vendor: Qt
ExpectedLocations:
  - '%PROGRAMFILES%\LSoft Technologies\Active@ Data Studio'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ File Recovery'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ Disk Editor'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ Password Changer'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ ISO Manager'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ UNERASER'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ KillDisk 25'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ UNDELETE'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ Disk Monitor'
  - '%PROGRAMFILES%\LSoft Technologies\Active@ Partition Manager'
ExpectedVersionInformation:
  - CompanyName: "The Qt Company Ltd."
    FileDescription: "C++ Application Development Framework"
    FileVersion: "5.12.5.0"
    LegalCopyright: "Copyright (C) 2019 The Qt Company Ltd."
    OriginalFilename: "Qt5Network.dll"
    ProductName: "Qt5"
    ProductVersion: "5.12.5.0"
ExpectedSignatureInformation:
  - Type: Authenticode
    Subject: CN=Symantec Time Stamping Services CA - G2,O=Symantec Corporation,C=US
    Issuer: CN=Thawte Timestamping CA,OU=Thawte Certification,O=Thawte,L=Durbanville,ST=Western Cape,C=ZA
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\LSoft Technologies\Active@ Password Changer\PasswordChanger.exe'
    Type: "Sideloading"
    SHA256:
      - 6f7f390b2012e7dfef9fcbd673a4a0256e2e217b11831e9a27a9d460ba57c0d2
    ExpectedVersionInformation:
      - CompanyName: "LSoft Technologies Inc."
        FileDescription: "Active@ Password Changer"
        FileVersion: "24.0.1.0"
        InternalName: "PasswordChanger"
        LegalCopyright: "Copyright (c) 1999-2024 LSoft Technologies Inc."
        OriginalFilename: "PasswordChanger.exe"
        ProductName: "Active@ Password Changer"
        ProductVersion: "24.0.1.0"
    ExpectedSignatureInformation:
      - Type: Authenticode
        Subject: CN=Symantec Time Stamping Services CA - G2,O=Symantec Corporation,C=US
        Issuer: CN=Thawte Timestamping CA,OU=Thawte Certification,O=Thawte,L=Durbanville,ST=Western Cape,C=ZA
Resources:
  - https://cyble.com/blog/threat-actor-targets-manufacturing-industry-with-malware/
  - https://www.virustotal.com/gui/file/dc36a3d95d9a476d773b961b15b188aa3aae0e0a875bca8857fca18c691ec250
Acknowledgements:
  - Name: "Micah Babinski"
  - Name: "Jai Minton"
    Company: "Huntress"
    Twitter: "@CyberRaiju"
---

