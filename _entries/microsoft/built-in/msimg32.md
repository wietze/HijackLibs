---
Name: msimg32.dll
Author: Jai Minton - HuntressLabs
Created: 2025-04-10
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Haihaisoft PDF Reader'
  - '%SYSTEM32%'
  - '%SYSWOW64%'
ExpectedVersionInformation:
  - OriginalFilename: gdiext
    InternalName: gdiext
    FileDescription: GDIEXT Client DLL
ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Haihaisoft PDF Reader\hpreader.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: hpreader.exe
        InternalName: hpreader.exe
        FileDescription: Haihaisoft PDF Reader
    ExpectedSignatureInformation:
      - Subject: C=HK,1.2.840.113549.1.9.1=#0c156a6f7365706840686169686169736f66742e636f6d, L=Hong Kong,ST=Hong Kong, O=Haihaisoft Limited, CN=Haihaisoft Limited
        Issuer: C=BE, O=GlobalSign nv-sa, CN=GlobalSign CodeSigning CA - SHA256 - G3
        Type: Authenticode
    SHA256:
      - '2f9be76319a2441d14e7e10239373f053f05f3c1ca2056babb58db50ebe8c5c7'
      - '08c7fb6067acc8ac207d28ab616c9ea5bc0d394956455d6a3eecb73f8010f7a2'
  - Path: '%SYSTEM32%\consent.exe'
    Type: Sideloading
    ExpectedSignatureInformation:
      - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
        Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
        Type: Catalog
  - Path: '%PROGRAMFILES%\SoftMaker Office NX\TextMaker.exe'
    Type: Sideloading
    ExpectedSignatureInformation:
      - Subject: CN=SoftMaker Software GmbH, O=SoftMaker Software GmbH, S=Bayern, C=DE, SERIALNUMBER=HRB 8788
        Issuer: CN=Sectigo Public Code Signing CA EV R36, O=Sectigo Limited, C=GB
        Type: Authenticode
    ExpectedVersionInformation:
      - CompanyName: SoftMaker Software GmbH
        OriginalFilename: TextMaker.exe
        InternalName: TextMaker
        FileDescription: TextMaker
        ProductName: TextMaker
    SHA256:
      - '4fd03d7500ad255063241f0ff5e274f604ad900a0e9038ae0d45c903500add02'
      - 'a02ac8c67ddffa29bfb11ade80c18dded864b3cf0c22f4ccd20d901f33e6230f'
Resources:
  - https://www.virustotal.com/gui/file/2f08e2316a38da2d39d31131a0e3314024ab80756050624afafc1e17b0562d5e/details
  - https://thedfirreport.com/2026/06/29/from-bing-search-to-ransomware-bumblebee-and-adaptixc2-deliver-akira-3/
  - https://thedfirreport.com/2025/08/05/from-bing-search-to-ransomware-bumblebee-and-adaptixc2-deliver-akira-2/
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
  - Name: The DFIR Report
    Twitter: '@TheDFIRReport'
  - Name: Swisscom B2B CSIRT
    Twitter: '@CyberSecSwiss'
  - Name: Tim Sword
    Company: Huntress
---

