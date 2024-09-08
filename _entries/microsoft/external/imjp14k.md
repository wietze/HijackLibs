---
Name: imjp14k.dll
Author: Wietze Beukema
Created: 2024-09-08
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
  - '%PROGRAMFILES%\Common Files\Microsoft Shared\IME14\SHARED'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Common Files\Microsoft Shared\IME14\SHARED\imecmnt.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - CompanyName: Microsoft Corporation
        FileDescription: Microsoft Office IME 2010
        FileVersion: 14.0.4734.1000
        InternalName: imecmnt.exe
        LegalCopyright: "© 2010 Microsoft Corporation.\nAll rights reserved."
        OriginalFilename: imecmnt.exe
        ProductName: Microsoft Office IME 2010
        ProductVersion: 14.0.4734.1000
    ExpectedSignatureInformation:
      - Subject: CN=Microsoft Corporation, OU=MOPR, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
        Issuer: CN=Microsoft Code Signing PCA, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
        Type: Authenticode
    SHA256:
      - 80a7ff01de553cb099452cb9fac5762caf96c0c3cd9c5ad229739da7f2a2ca72
Resources:
  - https://blog.talosintelligence.com/chinese-hacking-group-apt41-compromised-taiwanese-government-affiliated-research-institute-with-shadowpad-and-cobaltstrike-2/
  - https://unit42.paloaltonetworks.com/stately-taurus-abuses-vscode-southeast-asian-espionage/
---

