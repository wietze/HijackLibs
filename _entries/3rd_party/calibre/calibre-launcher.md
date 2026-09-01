---
Name: calibre-launcher.dll
Author: Jai Minton - HuntressLabs
Created: 2024-08-07
Vendor: Calibre
ExpectedLocations:
  - '%PROGRAMFILES%\Calibre2'
VulnerableExecutables:
  - Path: 'calibre.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: calibre.exe
        InternalName: calibre
        FileDescription: The main calibre program
    SHA256:
      - 735e7b33b97bff3cf6416ed3b8ed7213d7258eec05202cbf8f8f8002c6435fd1
  - Path: 'ebook-edit.exe'
    Type: Sideloading
    ExpectedVersionInformation:
      - OriginalFilename: ebook-edit.exe
        InternalName: ebook-edit
        FileDescription: The calibre e-book editor
    SHA256:
      - 2459fafef92fba15db51222e6b94e9853b7eff3256a54be22736e41b587a1b1f
Resources:
  - https://www.huntress.com/blog/advanced-persistent-threat-targeting-vietnamese-human-rights-defenders
  - https://businessinsights.bitdefender.com/silkparasite-tracking-china-nexus-apt-across-central-asia
Acknowledgements:
  - Name: Jai Minton
    Company: Huntress
    Twitter: '@cyberrraiju'
  - Name: Craig Sweeney
    Company: Huntress
    Twitter: '@bumbucha'
---

