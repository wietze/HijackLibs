---
Name: unattend.dll
Author: Chris Spehn
Created: 2021-08-17
Vendor: Microsoft
ExpectedLocations:
  - "%SYSTEM32%"
VulnerableExecutables:
  - Path: '%SYSTEM32%\recoverydrive.exe'
    Type: Sideloading
Resources:
  - https://securityintelligence.com/posts/windows-features-dll-sideloading/
  - https://github.com/xforcered/WFH
Acknowledgements:
  - Name: Chris Spehn
    Twitter: "@ConsciousHacker"
---

