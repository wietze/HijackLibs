---
Name: oleacc.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bootim.exe"
- Path: "%SYSTEM32%\\cttune.exe"
- Path: "%SYSTEM32%\\devicepairingwizard.exe"
- Path: "%SYSTEM32%\\easeofaccessdialog.exe"
- Path: "%SYSTEM32%\\fsquirt.exe"
- Path: "%SYSTEM32%\\magnify.exe"
- Path: "%SYSTEM32%\\optionalfeatures.exe"
- Path: "%SYSTEM32%\\osk.exe"
- Path: "%SYSTEM32%\\psr.exe"
- Path: "%SYSTEM32%\\utilman.exe"
- Path: "%SYSTEM32%\\wmpdmc.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
