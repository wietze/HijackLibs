---
Name: propsys.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\bootim.exe"
- Path: "%SYSTEM32%\\calc.exe"
- Path: "%SYSTEM32%\\colorcpl.exe"
- Path: "%SYSTEM32%\\compmgmtlauncher.exe"
- Path: "%SYSTEM32%\\computerdefaults.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\dpiscaling.exe"
- Path: "%SYSTEM32%\\dsregcmd.exe"
- Path: "%SYSTEM32%\\dxpserver.exe"
- Path: "%SYSTEM32%\\fodhelper.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\fondue.exe"
- Path: "%SYSTEM32%\\fxssvc.exe"
- Path: "%SYSTEM32%\\fxsunatd.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\mobsync.exe"
- Path: "%SYSTEM32%\\mspaint.exe"
- Path: "%SYSTEM32%\\netplwiz.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\optionalfeatures.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\pinenrollmentbroker.exe"
- Path: "%SYSTEM32%\\printbrmui.exe"
- Path: "%SYSTEM32%\\printui.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\quickassist.exe"
- Path: "%SYSTEM32%\\rdpclip.exe"
- Path: "%SYSTEM32%\\resmon.exe"
- Path: "%SYSTEM32%\\sdclt.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\settingsynchost.exe"
- Path: "%SYSTEM32%\\slui.exe"
- Path: "%SYSTEM32%\\synchost.exe"
- Path: "%SYSTEM32%\\systemsettingsadminflows.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\wfs.exe"
- Path: "%SYSTEM32%\\wkspbroker.exe"
- Path: "%SYSTEM32%\\workfolders.exe"
- Path: "%SYSTEM32%\\wpnpinst.exe"
- Path: "%SYSTEM32%\\write.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
