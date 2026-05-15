---
Name: endpointdlp.dll
Author: Jose Oregon
Created: 2026-05-11
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMDATA%\Microsoft\Windows Defender\Platform\%VERSION%'
  - '%PROGRAMFILES%\Windows Defender\%VERSION%'
VulnerableExecutables:
  - Path: '%PROGRAMDATA%\Microsoft\Windows Defender\Platform\%VERSION%\mpextms.exe'
    Type: Sideloading
    SHA256:
      - a3ff17daf9001831741d6b3479d679482218d8a7b7c7ceadaebd590fcafe1f8e
Resources:
  - https://www.virustotal.com/gui/file/28f0f4c19d290c74a2e2d20004e1eaccb062fb99f53254ba3810eeec29c191cc
  - https://www.reddit.com/r/blueteamsec/comments/1sur3eh/observed_staged_endpoint_dlp_masquerade_dll/
Acknowledgements:
  - Name: Jose Oregon
    Twitter: '@amprage_'
---

