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
Resources:
  - https://www.virustotal.com/gui/file/2f08e2316a38da2d39d31131a0e3314024ab80756050624afafc1e17b0562d5e/details
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

