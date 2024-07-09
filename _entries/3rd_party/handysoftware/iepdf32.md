---
Name: iepdf32.dll
Author: Jai Minton - HuntressLabs
Created: 2024-07-09
Vendor: HandySoftware
ExpectedLocations:
  - '%PROGRAMFILES%\Handy Viewer'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Handy Viewer\hv.exe'
    Type: Sideloading
    ExpectedSignatureInformation:
      - Subject: CN=German Gorodokuplya,O=German Gorodokuplya,POSTALCODE=69000,STREET="Nyzhnya\, 3",L=Zaporizhzhya,ST=Zaporizhka,C=UA
        Issuer: CN=Sectigo RSA Code Signing CA,O=Sectigo Limited,L=Salford,ST=Greater Manchester,C=GB
        Type: Authenticode
    ExpectedVersionInformation:
      - FileDescription: Handy Viewer
    SHA256:
      - '6d8905ec0b1dfdc0a10d1cce40714ddd73205a09ad390b933ddbecdcf06a4cf2'
Resources:
  - https://www.virustotal.com/gui/file/b748e5dc64f5ece1b256705b7365a89b3be9284587da5f3abbde4be78864867e/relations
  - https://www.virustotal.com/gui/file/030ca3bb54a276eea7cdf69d90d04b58a4fa500396e94340895f923d87dc169a/relations
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

