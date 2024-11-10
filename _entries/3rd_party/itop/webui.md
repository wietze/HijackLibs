---
Name: webui.dll
Author: Jai Minton - HuntressLabs
Created: 2024-08-30
Vendor: iTop
ExpectedLocations:
  - '%PROGRAMFILES%\iTop Screen Recorder'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\iTop Screen Recorder\iScrPaint.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: iScrPaint.exe
        InternalName: iScrPaint.exe
        FileDescription: iTop Screen Recorder
    SHA256:
      - '46afbf1cbd2e1b5e108c133d4079faddc7347231b0c48566fd967a3070745e7f'
Resources:
  - https://www.virustotal.com/gui/file/063d2c12aa8316b242c5beb9dbbf934be7cee9df93b1612de9aa2f1f3084f0da/relations
  - https://www.virustotal.com/gui/file/521c0de9a7b2db7d9a65b443dd630a28e2b4e33f8c56336e7630c646aa2cf280/detection
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---
