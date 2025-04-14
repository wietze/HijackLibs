---
Name: qtgui4.dll
Author: Jai Minton - HuntressLabs
Created: 2025-04-10
Vendor: Qt
ExpectedLocations:
  - '%PROGRAMFILES%\Audacity'
  - '%PROGRAMFILES%\AOMEI\AOMEI Backupper\%VERSION%'
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Audacity\crashreporter.exe'
    Type: Sideloading
    SHA256:
      - '51de0b104e9ced3028a41d01dedf735809eb7f60888621027c7f00f0fcf9c834'
  - Path: '%PROGRAMFILES%\AOMEI\AOMEI Backupper\%VERSION%\ShortcutTaskAgent.exe'
    Type: Sideloading
    SHA256:
      - '7e6b2664f4417f5a8f981ced5f2eef867cb72bca990fe3864d76d878ff62cf52'
Resources:
  - https://www.virustotal.com/gui/file/dbdf5e11ec81ed1d941ec16fc7b94ab65f814ceb1e7fb524f2c64cbb422f7382/details
  - https://forum.eset.com/topic/44610-im-afraid-i-did-something-stupid-and-im-usually-very-careful-i-keep-getting-an-address-has-been-blocked-message/page/2/
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
---

