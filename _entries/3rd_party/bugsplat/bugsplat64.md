---
Name: bugsplat64.dll
Author: Swachchhanda Shrawan Poudel
Created: 2025-02-27
Vendor: BugSplat
ExpectedLocations:
  - '%PROGRAMFILES%\Nitro\PDF Pro\'
  - '%PROGRAMFILES%\Nitro\Pro'
VulnerableExecutables:
  - Path: 'BugSplatHD64.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: BugSplatHD.EXE
        InternalName: BugSplatHD.EXE
        FileDescription: Hang detection module, BugSplatHD.EXE
        FileVersion: 3.3.1.0
    SHA256:
      - 'b874075e7bc7c9dbf25fed0d3f54aa694957e5ff57c0ebbcf88c9c277771d37c'
Resources:
  - https://x.com/ankit_anubhav/status/1895061182689747333
  - https://bazaar.abuse.ch/sample/97791eba8ac9745155cea4cc1a90e44765a97b840441220ec13c82f719c65f1a/
Acknowledgements:
  - Name: Ankit Anubhav
    Twitter: '@ankit_anubhav'
  - Name: Swachchhanda Shrawan Poudel
    Company: Nextron Systems
    Twitter: '@_swachchhanda_'
---

