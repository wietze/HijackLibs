---
Name: axeonoffhelper.dll
Author: Swachchhanda Shrawan Poudel
Created: 2025-06-18
Vendor: Microsoft
VulnerableExecutables:
  - Path: '%SYSTEM32%\wpr.exe'
    Type: Phantom
    Condition: 'Triggers via `wpr -boottrace -stopboot foo`; put malicious DLL in C:\Windows\System32'
    ExpectedVersionInformation:
      - CompanyName: 'Microsoft Corporation'
        FileDescription: 'Microsoft Windows Performance Recorder'
        InternalName: 'WPR.exe'
        LegalCopyright: '© Microsoft Corporation. All rights reserved.'
        OriginalFilename: 'WPR.exe'
        ProductName: 'Microsoft® Windows® Operating System'
Resources:
  - https://www.hexacorn.com/blog/2025/06/14/wpr-exe-boottrace-phantom-dll-axeonoffhelper-dll-lolbin/
Acknowledgements:
  - Name: 'Adam'
    Twitter: '@Hexacorn'
  - Name: 'Swachchhanda Shrawan Poudel'
    Company: 'Nextron Systems'
    Twitter: '@_swachchhanda_'
---

