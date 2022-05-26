---
Name: propsys.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%SYSTEM32%\bootim.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\calc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\colorcpl.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\compmgmtlauncher.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\computerdefaults.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\dpiscaling.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dsregcmd.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dxpserver.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fodhelper.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\fondue.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fxssvc.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\fxsunatd.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\mobsync.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\mspaint.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\netplwiz.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\optionalfeatures.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\pinenrollmentbroker.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\printbrmui.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\printui.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\quickassist.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\rdpclip.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\resmon.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\sdclt.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\settingsynchost.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\slui.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\synchost.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\systemsettingsadminflows.exe'
  Type: Sideloading
  AutoElevate: true
- Path: '%SYSTEM32%\wfs.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wkspbroker.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\workfolders.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\wpnpinst.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\write.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\certreq.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\cleanmgr.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\control.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\ddodiag.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\dfrgui.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\explorer.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\fxscover.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\licensingdiag.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\msdt.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\notepad.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\powershell.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\presentationsettings.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\tabcal.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
- Path: '%SYSTEM32%\verifier.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://wietze.github.io/blog/save-the-environment-variables
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
---

