---
Name: winmm.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
ExpectedSignatureInformation:
- Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Type: Catalog
VulnerableExecutables:
- Path: '%SYSTEM32%\mblctr.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\mspaint.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mstsc.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\osk.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\presentationsettings.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\proximityuxhost.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\wfs.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\winsat.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%APPDATA%\Zoom\bin_%VERSION%\Zoom.exe'
  Type: Sideloading
  SHA256:
  - 9783cdd475c54ec21a035b5035c80329fa14be830c71c7c133de06ed98ad86d8
  ExpectedSignatureInformation:
  - Subject: CN="Zoom Video Communications, Inc.", O="Zoom Video Communications, Inc.", L=San Jose, ST=California, C=US, SERIALNUMBER=4969967
    Issuer: CN=DigiCert Trusted G4 Code Signing RSA4096 SHA256 2021 CA1, O="DigiCert, Inc.", C=US
    Type: Authenticode
  ExpectedVersionInformation:
  - CompanyName: Zoom Video Communications, Inc.
    FileDescription: Zoom
    FileVersion: 6.2.10.50536
    InternalName: Zoom
    OriginalFilename: Zoom
    ProductName: Zoom
    ProductVersion: 6.2.10.50536
  Condition: Zoom.exe statically imports winmm.dll timeGetTime, timeBeginPeriod, and timeEndPeriod. Observed in 40 FUDCrypt side-load packages with unique malicious winmm.dll payloads.
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://securelist.com/wastedlocker-technical-analysis/97944/
- https://securityintelligence.com/posts/windows-features-dll-sideloading/
- https://github.com/xforcered/WFH
- https://ctrlaltintel.com/research/FudCrypt-analysis-1/
- https://support.zoom.com/hc/en/article?sysparm_article=KB0064484
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
- Name: Chris Spehn
  Twitter: '@ConsciousHacker'
- Name: Josh Allman
  Twitter: '@xorjosh'
---

