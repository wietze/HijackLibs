---
Name: concrt140.dll
Author: Austin Worline
Created: 2025-04-06
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Microsoft Visual Studio\%VERSION%\Community\Common7\IDE\VC\vcpackages'
  - '%PROGRAMFILES%\Microsoft Visual Studio\%VERSION%\BuildTools\Common7\IDE\VC\vcpackages'
  - '%PROGRAMFILES%\Microsoft Visual Studio\%VERSION%\BuildTools\Common7\IDE'
ExpectedVersionInformation:
  - OriginalFilename: concrt140.dll
    InternalName: concrt140.dll
    FileDescription: Microsoft® Concurrency Runtime Library
VulnerableExecutables:
  - Path: vcpkgsrv.exe
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: VCPkgSrv.exe
        InternalName: VCPkgSrv.exe
        FileDescription: Microsoft (R) Visual C++ Package Server
    SHA256:
      - a5c5487194f761dac90e178c9c1753c0f47b041f3168b5c23a587f33f69e5089
Resources:
  - https://www.youtube.com/watch?v=uTQIIWsUSHA
  - https://www.virustotal.com/gui/file/119910bd40da350fe61397b7eb8b6bc4c1280ff130129b4f5046d7f460c62fac
Acknowledgements:
  - Name: Austin Worline
    Company: Huntress
    Twitter: "@0xffaraday"
---

