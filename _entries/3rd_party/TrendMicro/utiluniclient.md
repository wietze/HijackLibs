---
Name: utiluniclient.dll
Type: Phantom
Author: Wietze Beukema
Created: 2021-02-28

Vendor: Trend Micro
CVE: CVE-2019-15628
ExpectedLocations:
VulnerableExecutables:
- Path: "%PROGRAMFILES%\\trend micro\\amsp\\coreserviceshell.exe"
  Condition: Trend Micro Maximum Security <=16.0.1221
  PrivilegeEscalation: True

Resources:
- https://safebreach.com/blog/2019/trend-micro-security-16-dll-search-order-hijacking-and-potential-abuses/
---
