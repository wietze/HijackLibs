---
Name: dismcore.dll
Type: Search Order
Author: Wietze Beukema
Created: 2021-02-28

Vendor: Microsoft
ExpectedLocations:
- "%SYSTEM32%\\dism"
VulnerableExecutables:
- Path: "%SYSTEM32%\\dism.exe"
  Condition: Windows 7

Resources:
- https://cofense.com/exploiting-unpatched-vulnerability-ave_maria-malware-not-full-grace/
---
