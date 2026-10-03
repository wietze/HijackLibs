---
Name: vim64.dll
Author: Daniel Koifman
Created: 2026-09-29
Vendor: Vim
ExpectedLocations:
  - '%PROGRAMFILES%\Vim'
  - '%PROGRAMFILES%\Vim\vim%VERSION%'
ExpectedVersionInformation:
  - CompanyName: 'Vim Developers'
    FileDescription: 'Vi Improved - A Text Editor'
    InternalName: 'VIM'
    OriginalFilename: 'vim64.dll'
    ProductName: 'Vim'
ExpectedSignatureInformation:
  - Subject: 'CN=SignPath Foundation, O=SignPath Foundation, L=Lewes, S=Delaware, C=US'
    Issuer: 'CN=GlobalSign GCC R45 CodeSigning CA 2020, O=GlobalSign nv-sa, C=BE'
    Type: Authenticode
VulnerableExecutables:
  - Path: '%PROGRAMFILES%\Vim\vim.exe'
    Type: Sideloading
    SHA256:
      - 'cd9519a9ac2af911dd26eddf195be36849a130add7dabe16ef1d265702693724'
  - Path: '%PROGRAMFILES%\Vim\gvim.exe'
    Type: Sideloading
    SHA256:
      - '5c64583f0c163f1ae77678592ff167b9d9074c69b6832d3547117dc4f38ab3e1'
Resources:
  - https://www.microsoft.com/en-us/security/blog/2026/09/28/needymantis-unpacking-a-post-compromise-malware-family-used-in-targeted-operations/
  - https://www.vim.org/
Acknowledgements:
  - Name: Daniel Koifman
    Company: Cribl
    Twitter: '@koifsec'
---

