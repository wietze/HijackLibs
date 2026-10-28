---
Name: blkscrdl.dll
Author: Jose Enrique Hernandez
Created: 2026-10-17
Vendor: Famatech
ExpectedLocations:
  - '%SYSTEM32%\rserver%VERSION%'
VulnerableExecutables:
  - Path: '%SYSTEM32%\rserver%VERSION%\FamItrfc.exe'
    Type: Sideloading
    SHA256:
      - 6ca1894ce68f305f6f01041a9f7ea88a6998ea5e650e70736d282bf782787bb5
    Condition: 'Executed with --runtimechk argument by RadminComponentRuntime scheduled task'
    ExpectedSignatureInformation:
      - Subject: CN=Famatech Corp., O=Famatech Corp., L=Petersburg, C=RU
        Issuer: CN=GlobalSign CodeSigning CA - SHA256 - G3, O=GlobalSign nv-sa, C=BE
        Type: Authenticode
  - Path: '%SYSTEM32%\rserver%VERSION%\FamItrf2.exe'
    Type: Sideloading
    ExpectedSignatureInformation:
      - Subject: CN=Famatech Corp., O=Famatech Corp., L=Petersburg, C=RU
        Issuer: CN=GlobalSign CodeSigning CA - SHA256 - G3, O=GlobalSign nv-sa, C=BE
        Type: Authenticode
Resources:
  - https://cloud.google.com/blog/topics/threat-intelligence/investigating-ephemeral-supply-chain-tampering
  - https://www.virustotal.com/gui/file/5837bc26a73cfb46ffd466cf889f03ce2f6a48f1f3fd42ec8be22189d51cab1e
Acknowledgements:
  - Name: Tyler McLellan
    Company: Google Threat Intelligence Group
---

