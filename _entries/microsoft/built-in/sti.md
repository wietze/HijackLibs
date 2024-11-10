---
Name: sti.dll
Author: Tim Baker
Created: 2024-11-09
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
ExpectedVersionInformation:
  - CompanyName: Microsoft Corporation
    FileDescription: Still Image Devices client DLL
    InternalName: STI
    LegalCopyright: © Microsoft Corporation. All rights reserved.
    OriginalFilename: STI.DLL.MUI
ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Windows Photo Viewer\ImagingDevices.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - CompanyName: Microsoft Corporation
        FileDescription: Imaging Devices Control Panel
        InternalName: ImagingDevices.cpl
        LegalCopyright: © Microsoft Corporation. All rights reserved.
        OriginalFilename: ImagingDevices.cpl.mui
        ProductName: Microsoft® Windows® Operating System
    ExpectedSignatureInformation:
      - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
        Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
        Type: Catalog
Resources:
  - https://blog.google/threat-analysis-group/government-backed-actors-exploiting-winrar-vulnerability/
Acknowledgements:
  - Name: Tim Baker
    Company: DotSec (https://www.dotsec.com)
---
