---
Name: msvfw32.dll
Author: Tim Sword - HuntressLabs
Created: 2026-10-23
Vendor: Microsoft
ExpectedLocations:
  - '%SYSWOW64%'
  - '%SYSTEM32%'
ExpectedSignatureInformation:
  - Type: Catalog
    Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\MediaInfo\MediaInfo.exe'
    Type: 'Sideloading'
    SHA256:
      - 587ca3adca5ca0fa0795df541b70fc34f57d1fca541d12179c838cdc70e34e45
    ExpectedVersionInformation:
      - CompanyName: 'MediaArea.net'
        FileDescription: 'MediaInfo'
        ProductName: 'MediaInfo'
    ExpectedSignatureInformation:
      - Type: Authenticode
        Subject: C=FR, S='Auvergne-Rhône-Alpes', L=Curienne, O=MEDIAAREA.NET, CN=MEDIAAREA.NET
        Issuer: C=US, S=Texas, L=Houston, O=SSL Corp, CN=SSL.com Code Signing Intermediate CA ECC R2
Acknowledgements:
  - Name: Tim Sword
    Company: Huntress
---

