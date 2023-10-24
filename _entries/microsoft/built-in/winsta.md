---
Name: winsta.dll
Author: Wietze Beukema
Created: 2021-02-27
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
ExpectedSignatureInformation:
- Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
  Type: Catalog
VulnerableExecutables:
- Path: '%SYSTEM32%\change.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\chglogon.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\chgport.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\ctfmon.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\displayswitch.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\msg.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\musnotification.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\query.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\quser.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\qprocess.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\qwinsta.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rdpclip.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rdpinput.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rdpsa.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rdpsauachelper.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rdpshell.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rdvghelper.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\reset.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rwinsta.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\systempropertiesadvanced.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\systempropertiescomputername.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\systempropertiesdataexecutionprevention.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\systempropertieshardware.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\systempropertiesprotection.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\systempropertiesremote.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\tscon.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\tsdiscon.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\tskill.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\DriverStore\FileRepository\%VERSION%\igfxSDK.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Intel(R) pGFX 2020, O=Intel Corporation, L=Santa Clara, S=CA, C=US
    Issuer: CN=Intel External Issuing CA 7B, O=Intel Corporation, L=Santa Clara, S=CA, C=US
    Type: Catalog
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://securityintelligence.com/posts/windows-features-dll-sideloading/
- https://github.com/xforcered/WFH
- https://twitter.com/BSummerz/status/1716851156625105342
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
- Name: Chris Spehn
  Twitter: '@ConsciousHacker'
- Name: Will Summerhill
  Twitter: '@BSummerz'
---

