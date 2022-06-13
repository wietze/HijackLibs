---
Name: iviewers.dll
Author: Wietze Beukema
Created: 2022-06-14
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Windows Kits\10\bin\%VERSION%\x86'
  - '%PROGRAMFILES(x86)%\Windows Kits\10\bin\%VERSION%\x86'
  - '%PROGRAMFILES%\Windows Kits\10\bin\%VERSION%\x64'
  - '%PROGRAMFILES(x86)%\Windows Kits\10\bin\%VERSION%\x64'
  - '%PROGRAMFILES%\Windows Kits\10\bin\%VERSION%\arm64'
  - '%PROGRAMFILES(x86)%\Windows Kits\10\bin\%VERSION%\arm64'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Windows Kits\10\bin\%VERSION%\x86\oleview.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES(x86)%\Windows Kits\10\bin\%VERSION%\x86\oleview.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES%\Windows Kits\10\bin\%VERSION%\x64\oleview.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES(x86)%\Windows Kits\10\bin\%VERSION%\x64\oleview.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES%\Windows Kits\10\bin\%VERSION%\arm64\oleview.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES(x86)%\Windows Kits\10\bin\%VERSION%\arm64\oleview.exe'
    Type: Sideloading
Resources:
  - https://www.secureworks.com/research/shadowpad-malware-analysis
  - https://www.pwc.co.uk/issues/cyber-security-services/research/chasing-shadows.html

---

