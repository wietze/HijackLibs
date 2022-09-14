---
Name: mscoree.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
  - "%SYSWOW64%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\aitstatic.exe'
    Type: Sideloading
  - Path: '%SYSTEM32%\presentationhost.exe'
    Type: Sideloading
  - Path: '%WINDIR%\Microsoft.NET\Framework\v%VERSION%\applaunch.exe'
    Type: Sideloading
Resources:
  - https://wietze.github.io/blog/hijacking-dlls-in-windows
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
  - https://www.secureworks.com/research/shadowpad-malware-analysis
Acknowledgements:
  - Name: Wietze
    Twitter: "@wietze"
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

