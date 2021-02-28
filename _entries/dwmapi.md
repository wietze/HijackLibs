---
Name: dwmapi.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\certreq.exe"
- Path: "%SYSTEM32%\\devicepairingwizard.exe"
- Path: "%SYSTEM32%\\displayswitch.exe"
- Path: "%SYSTEM32%\\dxpserver.exe"
- Path: "%SYSTEM32%\\fsquirt.exe"
- Path: "%SYSTEM32%\\gamepanel.exe"
- Path: "%SYSTEM32%\\lockscreencontentserver.exe"
- Path: "%SYSTEM32%\\osk.exe"
- Path: "%SYSTEM32%\\rdpclip.exe"
- Path: "%SYSTEM32%\\rdpshell.exe"
- Path: "%SYSTEM32%\\rdvghelper.exe"
- Path: "%SYSTEM32%\\wmpdmc.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
