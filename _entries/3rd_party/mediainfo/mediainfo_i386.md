---
Name: mediainfo_i386.dll
Author: Jai Minton - HuntressLabs
Created: 2024-06-13
Vendor: MediaInfo
ExpectedLocations:
  - '%PROGRAMFILES%\MediaInfo'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\MediaInfo\MediaInfo.exe'
    Type: Sideloading
    ExpectedSignatureInformation:
      - Subject: C=FR, S='Auvergne-Rhône-Alpes', L=Curienne, O=MEDIAAREA.NET, CN=MEDIAAREA.NET
        Issuer: C=US, S=Texas, L=Houston, O=SSL Corp, CN=SSL.com Code Signing Intermediate CA RSA R1
        Type: Authenticode
    ExpectedVersionInformation:
      - FileDescription: MediaInfo
    SHA256:
      - '4fc64e114f80ce755040ac2891bd1fab0492a831177491f3fe1382adf94030f9'
Resources:
  - https://www.virustotal.com/gui/file/69d9667cfab126f1c473163771511602497e05a908b3dbeaa29d165af879da97
Acknowledgements:
  - Name: Michael Elford
    Company: Huntress
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

