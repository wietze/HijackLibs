---
Name: cryptnet.dll
Author: Will Summerhill
Created: 2024-11-22
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
ExpectedSignatureInformation:
- Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Type: Catalog
VulnerableExecutables:
- Path: '%PROGRAMFILES%\Microsoft Deployment Toolkit\Bin\Microsoft.BDD.Catalog35.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
Resources:
- https://twitter.com/BSummerz/status/1860045985919205645
Acknowledgements:
- Name: Will Summerhill
  Twitter: '@BSummerz'
---

