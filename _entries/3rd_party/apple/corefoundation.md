---
Name: corefoundation.dll
Author: Matt Anderson - HuntressLabs
Created: 2024-04-13
Vendor: Apple
ExpectedLocations:
  - '%PROGRAMFILES%\Common Files\Apple\Apple Application Support'
  - '%SYSTEM32%'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\iTunes\ituneshelper.exe'
    Type: Sideloading
    SHA256:
      - '0d8878cca08903777888b3681f90e4a07c7aef7d9600a67dfa985844d4bf5eda'
  - Path: '%PROGRAMFILES%\QuickTime\QuickTimePlayer.exe'
    Type: Sideloading
    SHA256:
      - 'b3a7ff97aca1201758c5295afa7d34e8d05f429b7faf707cf4d5740b8c76cb61'
Resources:
  - https://analyze.intezer.com/analyses/82011cc1-c3df-4c63-9945-8730b0d1cf3e
  - https://www.virustotal.com/gui/file/ff5e56c20591a9019eb28b3cab88f5a240657c1c360bf01ad3a6d417fa10b7f5
  - https://www.joesandbox.com/analysis/1394928/0/html
  - https://www.virustotal.com/gui/file/0d8878cca08903777888b3681f90e4a07c7aef7d9600a67dfa985844d4bf5eda/details
  - https://discussions.apple.com/thread/2732037?sortBy=best
  - https://iosninja.io/dll/download/corefoundation-dll
Acknowledgements:
  - Name: Matt Anderson
    Twitter: '@nosecurething'
---

