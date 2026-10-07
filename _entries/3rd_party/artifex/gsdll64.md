---
Name: gsdll64.dll
Author: Liran Ravich
Created: 2026-10-04
Vendor: Artifex
ExpectedLocations:
  - '%PROGRAMFILES%\gs\gs%VERSION%\bin'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\gs\gs%VERSION%\bin\gswin64c.exe'
    Type: Sideloading
    SHA256:
      - '3ec80c57f7fba7e09ff9ca7f2ebcf7867170ecefb17ac34daddd634269b9410f'
  - Path: '%PROGRAMFILES%\gs\gs%VERSION%\bin\gswin64.exe'
    Type: Sideloading
Resources:
  - https://ghostscript.readthedocs.io/en/gs10.04.0/Install.html
  - https://github.com/ArtifexSoftware/ghostpdl/blob/157ff788cd29e0b0f6a02132e11a4bf10acfdb48/psi/dwdll.c#L36-L80
  - https://www.security.com/threat-intelligence/warlock-ransomware-critical-infrastructure
  - https://www.f6.ru/blog/eastern-trail/
  - https://www.virustotal.com/gui/file/7b32282e5b79a39f2cb48ee6e17dc60a382553cb25dfd3b6e7aa913a81d371b6
Acknowledgements:
  - Name: Liran Ravich
    Company: Cribl
---

