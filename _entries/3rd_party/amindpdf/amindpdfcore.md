---
Name: amindpdfcore.dll
Author: Still Hsu
Created: 2024-05-26
Vendor: AmindPDF
ExpectedLocations:
- '%PROGRAMFILES%\GeekerPDF\GeekerPDF'
VulnerableExecutables:
- Path: '%PROGRAMFILES%\GeekerPDF\GeekerPDF\GeekerPDF.exe'
  Type: Sideloading
  ExpectedVersionInformation:
  - FileDescription: AmindPDF
    InternalName: AmindPDF.exe
    OriginalFilename: AmindPDF.exe
    ProductName: AmindPDF
  ExpectedSignatureInformation:
  - Subject: CN=AmindPDF Limited, O=AmindPDF Limited, STREET="RM 802, 8/F IHOME CTR 369 LOCKHART RD", L=Wan Chai, S=Hong Kong Island, C=HK
    Issuer: CN=GlobalSign GCC R45 EV CodeSigning CA 2020, O=GlobalSign nv-sa, C=BE
    Type: Authenticode
  SHA256:
  - 107ba73ae05ec6ba6d814665923191f14757015557eeeff16206cc957da29be3
Resources:
  - https://www.virustotal.com/gui/file/78a60bea5693138c771386b8c22f0adfe6765a6313b80488bd1084bc9ed370bd
Acknowledgements:
  - Name: Still Hsu
    Twitter: '@AzakaSekai_'
---

