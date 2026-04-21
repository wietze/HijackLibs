---
Name: iphlpapi.dll
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
- Path: '%SYSTEM32%\arp.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\colorcpl.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\datausagelivetiletask.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\dcdiag.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\devicecensus.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\dnscacheugc.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\fxscover.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\fxssvc.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\fxsunatd.exe'
  Type: Sideloading
  AutoElevate: true
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\ipconfig.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\mousocoreworker.exe'
  Type: Sideloading
- Path: '%SYSTEM32%\msra.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\mstsc.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\nbtstat.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\net.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\netbtugc.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\netiougc.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\netsh.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\netstat.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\omadmclient.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\pathping.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\printbrmui.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\printui.exe'
  Type: Sideloading
  AutoElevate: true
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
- Path: '%SYSTEM32%\route.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\tracert.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\w32tm.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\wfs.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\wifitask.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\wpnpinst.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%LOCALAPPDATA%\microsoft\onedrive\onedrive.exe'
  Type: Search Order
- Path: '%LOCALAPPDATA%\microsoft\onedrive\OneDriveStandaloneUpdater.exe'
  Type: Search Order
- Path: '%LOCALAPPDATA%\microsoft\teams\current\teams.exe'
  Type: Search Order
- Path: '%SYSTEM32%\dpiscaling.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\rasphone.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\slui.exe'
  Type: Environment Variable
  Variable: SYSTEMROOT
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%PROGRAMFILES%\Minecraft Launcher\MinecraftLauncher.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Mojang AB, O=Mojang AB, L=Stockholm, C=SE
    Issuer: CN=DigiCert Trusted G4 Code Signing RSA4096 SHA384 2021 CA1, O="DigiCert, Inc.", C=US
    Type: Authenticode
  SHA256:
  - 6511ef24c41cf20f707119dd40971420f1cd6f97f0e888b7d24b5e0dec9d5495
- Path: '%PROGRAMFILES%\Microsoft Deployment Toolkit\Bin\Microsoft.BDD.Catalog35.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%LOCALAPPDATA%\Microsoft\OneDrive\Update\OneDriveSetup.exe'
  Type: Sideloading
  SHA256:
  - d044df0e67952c40201d70abd676f9b4ce4b168d85ab538d269b6e55b08205a3
  ExpectedSignatureInformation:
  - Subject: C=US, ST=Washington, L=Redmond, O=Microsoft Corporation, CN=Microsoft Corporation
    Issuer: C=US, ST=Washington, L=Redmond, O=Microsoft Corporation, CN=Microsoft Code Signing PCA 2010
    Type: Authenticode
  ExpectedVersionInformation:
  - CompanyName: Microsoft Corporation
    FileDescription: Microsoft OneDrive (64 bit) Setup
    FileVersion: 24.015.0121.0003
    InternalName: OneDriveSetup.exe
    OriginalFilename: OneDriveSetup.exe
    ProductName: Microsoft OneDrive
    ProductVersion: 24.015.0121.0003
  Condition: OneDriveSetup.exe statically imports iphlpapi.dll GetAdaptersInfo. Observed in 7 FUDCrypt side-load packages with unique malicious iphlpapi.dll payloads.
- Path: '%PROGRAMFILES%\WindowsApps\Microsoft.MicrosoftOfficeHub_%VERSION%\WebViewHost\WebViewHost.exe'
  Type: Sideloading
  SHA256:
  - 49a87a2d7ca47a0ebef027a9030d5cf2f7bb963e74bccfd3f79e86536277a5d8
  ExpectedSignatureInformation:
  - Subject: C=US, ST=Washington, L=Redmond, O=Microsoft Corporation, CN=Microsoft Corporation
    Issuer: C=US, ST=Washington, L=Redmond, O=Microsoft Corporation, CN=Microsoft Code Signing PCA 2011
    Type: Authenticode
  ExpectedVersionInformation:
  - CompanyName: Microsoft Corporation
    FileDescription: Microsoft 365 (Office) App
    FileVersion: 18.2311.1071.0
    InternalName: WebViewHost.exe
    OriginalFilename: WebViewHost.exe
    ProductName: Microsoft 365 (Office)
    ProductVersion: 18.2311.1071.0
  Condition: WebViewHost.exe statically imports iphlpapi.dll GetAdaptersInfo. Observed in 5 FUDCrypt side-load packages with unique malicious iphlpapi.dll payloads.
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://wietze.github.io/blog/save-the-environment-variables
- https://twitter.com/SBousseaden/status/1550903546916311043
- https://securityintelligence.com/posts/windows-features-dll-sideloading/
- https://github.com/xforcered/WFH
- https://twitter.com/AndrewOliveau/status/1682185200862625792
- https://x00.zip/playing-with-process-handles/
- https://twitter.com/BSummerz/status/1860045985919205645
- https://ctrlaltintel.com/research/FudCrypt-analysis-1/
- https://learn.microsoft.com/en-us/answers/questions/f46df9f8-a9bb-4d1d-a11c-c0f6d02454b6/onedrivesetupexe-is-a-malware-autoupdate-without
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
- Name: Samir
  Twitter: '@sbousseaden'
- Name: Chris Spehn
  Twitter: '@ConsciousHacker'
- Name: Andrew Oliveau
  Twitter: '@AndrewOliveau'
- Name: Tim Peck
  Twitter: '@B0bby_Tablez'
- Name: Will Summerhill
  Twitter: '@BSummerz'
- Name: Josh Allman
  Twitter: '@xorjosh'
---

