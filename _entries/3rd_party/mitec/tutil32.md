---
Name: tutil32.dll
Author: Jai Minton
Created: 2025-05-06
Vendor: mitec
ExpectedLocations:
  - '%PROGRAMFILES%\PDE'
ExpectedVersionInformation:
  - CompanyName: 'Borland International'
    FileDescription: 'Borland Database Engine'
    FileVersion: '5.0.0.38'
    InternalName: 'TUTIL32'
    LegalCopyright: "Copyright Borland Int'l. 1991-1998"
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\PDE\PDE.exe'
    Type: 'Sideloading'
    SHA256:
      - 6243d4d73e8d43dd2d4dd7dc3ef761d7c23581ee7f3d047699d894b01bc022d6
    ExpectedVersionInformation:
      - CompanyName: 'MiTeC'
        FileDescription: 'Paradox Data Editor'
        FileVersion: '3.7.0.0'
        LegalCopyright: 'Copyright (c) 2001-2023, Michal Mutl'
        OriginalFilename: 'PDE.exe'
        ProductName: 'Paradox Data Editor'
        ProductVersion: '3.0.0.0'
Resources:
  - https://www.mitec.cz/pde.html
Acknowledgements:
  - Name: 'Jai Minton'
    Company: 'Huntress'
    Twitter: '@CyberRaiju'
---

