---
Name: comn.dll
Author: Still Hsu
Created: 2025-12-03
Vendor: AOMEI
ExpectedLocations:
  - '%PROGRAMFILES%\AOMEI\AOMEI Backupper\%VERSION%'
ExpectedSignatureInformation:
  - Type: Authenticode
    Subject: CN=COMODO RSA Extended Validation Code Signing CA,O=COMODO CA Limited,L=Salford,ST=Greater Manchester,C=GB
    Issuer: CN=COMODO RSA Certification Authority,O=COMODO CA Limited,L=Salford,ST=Greater Manchester,C=GB
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\AOMEI\AOMEI Backupper\%VERSION%\Abspawnhlp.exe'
    Type: 'Sideloading'
    SHA256:
      - ab5b956eca5ce83bf763d5f952316f17ba771adfd5cafd8ca9e262de61de4b4e
    ExpectedSignatureInformation:
      - Type: Authenticode
        Subject: CN=COMODO RSA Extended Validation Code Signing CA,O=COMODO CA Limited,L=Salford,ST=Greater Manchester,C=GB
        Issuer: CN=COMODO RSA Certification Authority,O=COMODO CA Limited,L=Salford,ST=Greater Manchester,C=GB
  - Path: '%PROGRAMFILES%\AOMEI\AOMEI Backupper\%VERSION%\ABCorehlp.exe'
    Type: 'Sideloading'
    SHA256:
      - d8499face4195c362af82d4b847aa6693a6a2dd4ee03db0c2f79ee270e5f082b
    ExpectedSignatureInformation:
      - Type: Authenticode
        Subject: CN=COMODO RSA Extended Validation Code Signing CA,O=COMODO CA Limited,L=Salford,ST=Greater Manchester,C=GB
        Issuer: CN=COMODO RSA Certification Authority,O=COMODO CA Limited,L=Salford,ST=Greater Manchester,C=GB
Resources:
  - https://www.virustotal.com/gui/file/2f5e9ef06c1ae2253a50c9556a8a522eaa5dd1e33d2fdc6930ab3c93ae538240
Acknowledgements:
  - Name: 'Still Hsu'
    Twitter: '@AzakaSekai_'
---

