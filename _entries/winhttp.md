---
Name: winhttp.dll
Type: Relative Path
Author: Wietze Beukema
Created: 2021-02-27

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%"
VulnerableExecutables:
- Path: "%SYSTEM32%\\cmdl32.exe"
- Path: "%SYSTEM32%\\devicecensus.exe"
- Path: "%SYSTEM32%\\dmclient.exe"
- Path: "%SYSTEM32%\\dsregcmd.exe"
- Path: "%SYSTEM32%\\mdmdiagnosticstool.exe"
- Path: "%SYSTEM32%\\msdt.exe"
- Path: "%SYSTEM32%\\mshta.exe"
- Path: "%SYSTEM32%\\mstsc.exe"
- Path: "%SYSTEM32%\\musnotification.exe"
- Path: "%SYSTEM32%\\musnotificationux.exe"
- Path: "%SYSTEM32%\\musnotifyicon.exe"
- Path: "%SYSTEM32%\\netsh.exe"
- Path: "%SYSTEM32%\\pacjsworker.exe"
- Path: "%SYSTEM32%\\resetengine.exe"
- Path: "%SYSTEM32%\\rpcping.exe"
- Path: "%SYSTEM32%\\systemreset.exe"
- Path: "%SYSTEM32%\\wkspbroker.exe"

Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
Acknowledgements:
- Name: Wietze
  Twitter: "@wietze"
---
