---
Name: qt5core.dll
Author: Jai Minton - HuntressLabs
Created: 2024-06-13
Vendor: Qt
ExpectedLocations:
  - '%PROGRAMFILES%\Electronic Arts\EA Desktop\EA Desktop'
  - '%PROGRAMFILES%\Microsoft Onedrive\%VERSION%'
  - '%LOCALAPPDATA%\Microsoft\Onedrive\%VERSION%'
  - '%PROGRAMFILES%\Dropbox\Client\%VERSION%'
  - '%PROGRAMFILES%\LogiOptionsPlus'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Electronic Arts\EA Desktop\EA Desktop\EASteamProxy.exe'
    Type: Sideloading
    ExpectedSignatureInformation:
      - Subject: C=US, ST=CALIFORNIA, L=Redwood City, O='Electronic Arts, Inc.', OU=EAC, CN='Electronic Arts, Inc.'
        Issuer: C=US, O='DigiCert, Inc.', CN=DigiCert Trusted G4 Code Signing RSA4096 SHA384 2021 CA1
        Type: Authenticode
    SHA256:
      - '4e775b5fafb4e6d89a4694f8694d2b8b540534bd4a52ff42f70095f1c929160e'
Resources:
  - https://www.virustotal.com/gui/file/2251e6582a12427b9b70d0e9ec7c8c27debe22b0a08b6ff6be46f4fb8914338c
  - https://www.virustotal.com/gui/file/173e138d5cf12f7eb55a67bcf3afc97ac1d7598fe4290ca4f125f28692e90fed
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

