---
Name: msasn1.dll
Author: ice-wzl
Created: 2025-04-04
Vendor: Microsoft
ExpectedLocations:
  - '%SYSTEM32%'
ExpectedVersionInformation:
  - OriginalFilename: msasn1.dll
    InternalName: msasn1.dll
    FileDescription: ASN.1 Runtime APIs
ExpectedSignatureInformation:
- Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Type: Catalog
VulnerableExecutables:
  - Path: 'winbox64.exe'
    Type: Sideloading
    Condition: 'version >= 3.41'
  - Path: 'winbox.exe'
    Type: Sideloading
    Condition: 'version >= 3.41'
Resources:
  - https://ice-wzl.medium.com/mikrotik-winbox-dll-side-loading-vulnerability-9ed9420bd4d7
  - https://github.com/pbatard/rufus/issues/1877
Acknowledgements:
  - Name: ice-wzl
    Twitter: '@ice_wzl_cyber'
---

