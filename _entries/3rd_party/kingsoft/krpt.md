---
Name: krpt.dll
Author: Still Hsu
Created: 2024-11-09
Vendor: Kingsoft
ExpectedLocations:
  - '%PROGRAMFILES%\Kingsoft\WPS Office\%VERSION%\office6'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Kingsoft\WPS Office\%VERSION%\office6\wpp.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - FileDescription: WPS Presentation
        OriginalFilename: wpp.exe
        ProductName: WPS Office
    ExpectedSignatureInformation:
      - Subject: 'CN="Zhuhai Kingsoft Office Software Co., Ltd.", O="Zhuhai Kingsoft Office Software Co., Ltd.", L=Zhuhai, S=Guangdong, C=CN'
        Issuer: 'CN=DigiCert Assured ID Code Signing CA-1, OU=www.digicert.com, O=DigiCert Inc, C=US'
        Type: Authenticode
Resources:
  - https://www.virustotal.com/gui/file/4957a62e019c30c0a79e4d2d4dd854f6e8f6e0aadb606e157525d98ee0ac5096
  - https://www.virustotal.com/gui/file/57acd8566e6cc0526e99d0ba450c662b11a5f70b08bcfe0f326654d9f630a1f1
Acknowledgements:
  - Name: Still Hsu
    Twitter: '@AzakaSekai_'
---
