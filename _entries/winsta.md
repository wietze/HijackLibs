---
Name: winsta.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\change.exe"
- Path: "%SYSTEM32%\\chglogon.exe"
- Path: "%SYSTEM32%\\chgport.exe"
- Path: "%SYSTEM32%\\ctfmon.exe"
- Path: "%SYSTEM32%\\displayswitch.exe"
- Path: "%SYSTEM32%\\msg.exe"
- Path: "%SYSTEM32%\\musnotification.exe"
- Path: "%SYSTEM32%\\query.exe"
- Path: "%SYSTEM32%\\quser.exe"
- Path: "%SYSTEM32%\\qwinsta.exe"
- Path: "%SYSTEM32%\\rdpclip.exe"
- Path: "%SYSTEM32%\\rdpsa.exe"
- Path: "%SYSTEM32%\\rdpsauachelper.exe"
- Path: "%SYSTEM32%\\rdpshell.exe"
- Path: "%SYSTEM32%\\rdvghelper.exe"
- Path: "%SYSTEM32%\\reset.exe"
- Path: "%SYSTEM32%\\rwinsta.exe"
- Path: "%SYSTEM32%\\systempropertiesadvanced.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\systempropertiescomputername.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\systempropertiesdataexecutionprevention.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\systempropertieshardware.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\systempropertiesprotection.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\systempropertiesremote.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\tscon.exe"
- Path: "%SYSTEM32%\\tsdiscon.exe"
- Path: "%SYSTEM32%\\tskill.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
