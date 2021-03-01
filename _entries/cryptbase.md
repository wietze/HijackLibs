---
Name: cryptbase.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\calc.exe"
- Path: "%SYSTEM32%\\compmgmtlauncher.exe"
- Path: "%SYSTEM32%\\computerdefaults.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\disksnapshot.exe"
- Path: "%SYSTEM32%\\dpiscaling.exe"
- Path: "%SYSTEM32%\\efsui.exe"
- Path: "%SYSTEM32%\\filehistory.exe"
- Path: "%SYSTEM32%\\fodhelper.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\ie4uinit.exe"
- Path: "%SYSTEM32%\\lpksetup.exe"
- Path: "%SYSTEM32%\\mfpmp.exe"
- Path: "%SYSTEM32%\\mshta.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\net1.exe"
- Path: "%SYSTEM32%\\netplwiz.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\presentationhost.exe"
- Path: "%SYSTEM32%\\quickassist.exe"
- Path: "%SYSTEM32%\\rdpclip.exe"
- Path: "%SYSTEM32%\\rekeywiz.exe"
- Path: "%SYSTEM32%\\resmon.exe"
- Path: "%SYSTEM32%\\rmactivate.exe"
- Path: "%SYSTEM32%\\rmactivate_ssp_isv.exe"
- Path: "%SYSTEM32%\\sdclt.exe"
  AutoElevate: True
- Path: "%SYSTEM32%\\slui.exe"
- Path: "%SYSTEM32%\\sppextcomobj.exe"
- Path: "%SYSTEM32%\\stordiag.exe"
- Path: "%SYSTEM32%\\tzsync.exe"
- Path: "%SYSTEM32%\\uevappmonitor.exe"
- Path: "%SYSTEM32%\\useraccountcontrolsettings.exe"
- Path: "%SYSTEM32%\\workfolders.exe"
- Path: "%SYSTEM32%\\write.exe"
- Path: "%SYSTEM32%\\wscadminui.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
