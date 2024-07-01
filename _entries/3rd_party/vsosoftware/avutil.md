---
Name: avutil.dll
Author: Wietze Beukema
Created: 2024-07-01
Vendor: VSO Software
ExpectedLocations:
  - '%PROGRAMFILES%\VSO\ConvertX\7'
  - '%PROGRAMFILES%\VSO\convertXtoDVD'
  - '%PROGRAMFILES%\Common Files\Oracle\Java\javapath'
ExpectedVersionInformation:
  - CompanyName: VSO-Software SARL
    FileDescription: FFmpeg utility library
    InternalName: libavutil
    LegalCopyright: Copyright (C) 2000-2015 FFmpeg Project and VSO-Software SARL
    OriginalFilename: avutil.dll
    ProductName: FFmpeg
ExpectedSignatureInformation:
  - Subject: CN=VSO Software SARL, O=VSO Software SARL, L=Toulouse, S=Midi-Pyrenees, C=FR
    Issuer: CN=StartCom Class 3 Primary Intermediate Object CA, OU=Secure Digital Certificate Signing, O=StartCom Ltd., C=IL
    Type: Authenticode
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\VSO\ConvertX\7\ConvertXToDVD.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - CompanyName: VSO Software SARL
        FileDescription: Converter from almost all type of video/audio file to DVD that can be played on every standalone DVD players
        InternalName: ConvertXToDVD 7
        LegalCopyright: Copyright © 2006-2023 VSO Software SARL
        OriginalFilename: ConvertXToDVD.exe
        ProductName: ConvertXToDVD 7
        ProductVersion: "7.0"
    ExpectedSignatureInformation:
      - Subject: CN=VSO SOFTWARE, O=VSO SOFTWARE, S=Occitanie, C=FR
        Issuer: CN=Sectigo Public Code Signing CA R36, O=Sectigo Limited, C=GB
        Type: Authenticode
    SHA256:
      - ba4612db8ce37b8e64d163a4c8e236b0ad2ddc223b91383f270924846394bf95
      - 7dd16890875b1bd76d94fcea709019f1125c7eb1ffd7203ff5436ac1f7430bac
Resources:
  - https://twitter.com/Tac_Mangusta/status/1807778398887928313
  - https://www.joesandbox.com/analysis/1357123/0/html
Acknowledgements:
  - Name: Mangusta
    Twitter: "@Tac_Mangusta"
---

