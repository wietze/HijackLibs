---
Name: hid.dll
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
- Path: '%SYSTEM32%\psr.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\tabcal.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%SYSTEM32%\PerceptionSimulation\PerceptionSimulationService.exe'
  Type: Search Order
  ExpectedSignatureInformation:
  - Subject: CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Issuer: CN=Microsoft Windows Production PCA 2011, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
    Type: Catalog
- Path: '%PROGRAMFILES%\Logitech\SetPointP\LDeviceDetectionHelper.exe'
  Type: Sideloading
  ExpectedSignatureInformation:
  - Subject: CN=Logitech, OU=Digital ID Class 3 - Microsoft Software Validation v2, O=Logitech, L=Newark, S=California, C=US
    Issuer: CN=VeriSign Class 3 Code Signing 2010 CA, OU=Terms of use at https://www.verisign.com/rpa (c)10, OU=VeriSign Trust Network, O="VeriSign, Inc.", C=US
    Type: Authenticode
Resources:
- https://wietze.github.io/blog/hijacking-dlls-in-windows
- https://github.com/netero1010/ServiceMove-BOF
- https://www.virustotal.com/gui/file/30fbf917d0a510b8dac3bacb0f4948f9d55bbfb0fa960b07f0af20ba4f18fc19/
Acknowledgements:
- Name: Wietze
  Twitter: '@wietze'
- Name: v1stra
  Twitter: '@_v1stra'
- Name: Still Hsu
  Twitter: '@AzakaSekai_'
---
