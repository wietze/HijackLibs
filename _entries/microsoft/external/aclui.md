---
Name: aclui.dll
Author: Wietze Beukema
Created: 2021-12-07
Vendor: Microsoft
ExpectedLocations:
- '%SYSTEM32%'
- '%SYSWOW64%'
VulnerableExecutables:
- Path: '%PROGRAMFILES%\Windows Kits\10\bin\%VERSION%\x86\oleview.exe'
  Type: Sideloading
Resources:
- https://www.hexacorn.com/blog/2016/03/10/beyond-good-ol-run-key-part-36/
- https://www.contextis.com/en/blog/dll-search-order-hijacking
Acknowledgements:
- Name: Adam
  Twitter: '@hexacorn'
- Name: Lampros Noutsos
  Twitter: '@lampnout'
---
