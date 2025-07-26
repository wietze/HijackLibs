---
Name: sensapi.dll
Author: Wietze Beukema
Created: 2023-07-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
ExpectedSignatureInformation:
- Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Type: Catalog
VulnerableExecutables:
- Path: '%PROGRAMFILES%\Minecraft Launcher\MinecraftLauncher.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Mojang AB, O=Mojang AB, L=Stockholm, C=SE
    Issuer: CN=DigiCert Trusted G4 Code Signing RSA4096 SHA384 2021 CA1, O="DigiCert, Inc.", C=US
    Type: Authenticode
  SHA256:
  - 6511ef24c41cf20f707119dd40971420f1cd6f97f0e888b7d24b5e0dec9d5495
- Path: 'usysdiag.exe'
  Type: Sideloading
  SHA256:
  - 90040340ee101cac7831d7035230ac8ad4224d432e5636f34f13aa1c4a0c2041

Resources:
- https://twitter.com/AndrewOliveau/status/1682185200862625792
- https://www.fortinet.com/blog/threat-research/nailaolocker-ransomware-cheese
Acknowledgements:
- Name: Andrew Oliveau
  Twitter: '@AndrewOliveau'
---

