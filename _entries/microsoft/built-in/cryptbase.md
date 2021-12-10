---
Name: cryptbase.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\calc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\compmgmtlauncher.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\computerdefaults.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\disksnapshot.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\dpiscaling.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\efsui.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\filehistory.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\fodhelper.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\ie4uinit.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\lpksetup.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mfpmp.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mshta.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\mstsc.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\net1.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\netplwiz.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\netsh.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\presentationhost.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\quickassist.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rdpclip.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rekeywiz.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\resmon.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rmactivate.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\rmactivate_ssp_isv.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\sdclt.exe'
    Type: Sideloading
    AutoElevate: true
  - Path: '%SYSTEM32%\slui.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\sppextcomobj.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\stordiag.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\tzsync.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\uevappmonitor.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\useraccountcontrolsettings.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\workfolders.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\write.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\wscadminui.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
---

