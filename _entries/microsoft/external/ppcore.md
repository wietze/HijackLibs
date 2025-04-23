---
Name: ppcore.dll
Author: Swachchhanda Shrawan Poudel
Created: 2025-04-23
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Microsoft Office\OFFICE%VERSION%'
  - '%PROGRAMFILES%\Microsoft Office\Root\OFFICE%VERSION%'
  - '%PROGRAMFILES%\Microsoft Office %VERSION%\ClientX86\Root\Office%VERSION%'  # C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\Powerpnt.exe
  - '%PROGRAMFILES%\Microsoft Office %VERSION%\ClientX64\Root\Office%VERSION%'  # C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\Powerpnt.exe
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Microsoft Office\OFFICE%VERSION%\Powerpnt.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES%\Microsoft Office\Root\OFFICE%VERSION%\Powerpnt.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES%\Microsoft Office %VERSION%\ClientX86\Root\Office%VERSION%\Powerpnt.exe'
    Type: Sideloading
  - Path: '%PROGRAMFILES%\Microsoft Office %VERSION%\ClientX64\Root\Office%VERSION%\Powerpnt.exe'
    Type: Sideloading
Resources:
  - https://research.checkpoint.com/2025/apt29-phishing-campaign/
  - https://www.virustotal.com/gui/file/d931078b63d94726d4be5dc1a00324275b53b935b77d3eed1712461f0c180164
Acknowledgements:
  - Name: Swachchhanda Shrawan Poudel
    Twitter: '@_swachchhanda_'
    Company: Nextron Systems
---

