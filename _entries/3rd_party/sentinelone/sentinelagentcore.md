---
Name: sentinelagentcore.dll
Author: Amelia Casley
Created: 2025-08-13
Vendor: SentinelOne
ExpectedLocations:
  - '%PROGRAMFILES%\SentinelOne\Sentinel Agent %VERSION%'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\SentinelOne\Sentinel Agent %VERSION%\SentinelBrowserNativeHost.exe'
    Type: 'Sideloading'
    SHA256:
      - 0d9dfc113712054d8595b50975efd9c68f4cb8960eca010076b46d2fba3d2754
    ExpectedVersionInformation:
      - CompanyName: 'SentinelOne, Inc.'
        FileDescription: 'SentinelBrowserNativeHost'
        FileVersion: '24.1.5.277'
        InternalName: 'SentinelBrowserNativeHost'
        LegalCopyright: 'SentinelOne, Inc.'
        OriginalFilename: 'SentinelBrowserNativeHost.exe'
        ProductName: 'Sentinel Agent'
        ProductVersion: '24.1.5.277'
  - Path: '%PROGRAMFILES%\SentinelOne\Sentinel Agent %VERSION%\SentinelAgentWorker.exe'
    Type: 'Sideloading'
    SHA256:
      - be754c0950c015d5136029e05db65aca19952c51101554391b04ace47d2c82df
    ExpectedVersionInformation:
      - CompanyName: 'SentinelOne, Inc.'
        FileDescription: 'Sentinel Agent Worker'
        InternalName: 'SentinelAgentWorker'
        LegalCopyright: 'SentinelOne, Inc.'
        OriginalFilename: 'SentinelAgentWorker.exe'
        ProductName: 'Sentinel Agent'
Resources:
- https://twitter.com/pe4Chscreeching/status/1955624714241810488
Acknowledgements:
  - Name: Amelia Casley
    Company: Huntress Labs
    Twitter: '@pe4Chscreeching'
  - Name: Tanner Filip
    Company: Huntress Labs
    Twitter: '@wbmmfq'
---

