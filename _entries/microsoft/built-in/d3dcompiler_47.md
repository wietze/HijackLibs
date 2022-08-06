---
Name: d3dcompiler_47.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\windows kits\10\bin\%VERSION%\x64'
  - '%PROGRAMFILES%\windows kits\10\bin\%VERSION%\x86'
  - '%PROGRAMFILES%\windows kits\10\redist\d3d\x64'
  - '%PROGRAMFILES%\windows kits\10\redist\d3d\x86'
  - '%PROGRAMFILES%\wireshark'
  - '%PROGRAMFILES%\cisco systems\cisco jabber'
  - '%PROGRAMFILES%\microsoft\edge\application\%VERSION%'
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\dwm.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

