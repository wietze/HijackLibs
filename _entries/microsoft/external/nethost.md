---
Name: nethost.dll
Author: Josh Allman
Created: 2026-04-19
Vendor: Microsoft
ExpectedLocations:
- '%PROGRAMFILES%\dotnet\packs\Microsoft.NETCore.App.Host.win-x64\%VERSION%\runtimes\win-x64\native'
- '%PROGRAMFILES%\dotnet\packs\Microsoft.NETCore.App.Host.win-x86\%VERSION%\runtimes\win-x86\native'
VulnerableExecutables:
- Path: '%PROGRAMFILES%\Proton\VPN\ProtonVPN.exe'
  Type: Sideloading
  SHA256:
  - 38502a7852b56c500caba4cd92e15a67b745bb778fd452214bbc5599ff738c99
  ExpectedSignatureInformation:
  - Subject: C=CH, ST=Genève, O=Proton AG, CN=Proton AG
    Issuer: C=GB, O=Sectigo Limited, CN=Sectigo Public Code Signing CA EV R36
    Type: Authenticode
  Condition: ProtonVPN.exe statically imports nethost.dll!get_hostfxr_path. Observed in 167 FUDCrypt side-load packages with unique malicious nethost.dll payloads.
Resources:
- https://ctrlaltintel.com/research/FudCrypt-analysis-1/
- https://learn.microsoft.com/en-us/dotnet/core/tutorials/netcore-hosting
- https://protonvpn.com/support/install-windows-vpn
- https://protonvpn.com/support/protonvpn-windows-vpn-application/
Acknowledgements:
- Name: Josh Allman
  Twitter: '@xorjosh'
---

