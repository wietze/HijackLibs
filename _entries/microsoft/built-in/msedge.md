---
Name: msedge.dll
Author: Swachchhanda Shrawan Poudel
Created: 2024-07-25
Vendor: Microsoft
ExpectedLocations:
- '%PROGRAMFILES%\Microsoft\Edge\Application\%VERSION%'
- '%PROGRAMFILES%\Microsoft\Edgewebview\Application\%VERSION%'
- '%PROGRAMFILES%\Microsoft\EdgeCore\%VERSION%'
VulnerableExecutables:
- Path: '%PROGRAMFILES%\Microsoft\Edge\Application\%VERSION%\cookie_exporter.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Code Signing PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Authenticode
  ExpectedVersionInformation:
  - OriginalFilename: 'cookie_exporter.exe'
    FileDescription: 'Microsoft Edge'
Resources:
- https://securelist.com/apt41-in-africa/116986/
Acknowledgements:
- Name: Swachchhanda Shrawan Poudel
  Twitter: '@_swachchhanda_'
  Company: Nextron Systems
---

