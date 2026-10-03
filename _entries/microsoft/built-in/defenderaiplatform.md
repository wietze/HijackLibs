---
Name: defenderaiplatform.dll
Author: Ivan CF
Created: 2026-09-18
Vendor: Microsoft
ExpectedLocations:
  - '%PROGRAMDATA%\Microsoft\Windows Defender\Platform\%VERSION%'
VulnerableExecutables:
  - Path: '%PROGRAMDATA%\Microsoft\Windows Defender\Platform\%VERSION%\DefenderAiPlatformHost.exe'
    Type: Sideloading
    Condition: 'version >= 1.0.26070.9'
Resources:
  - https://learn.microsoft.com/en-us/defender-endpoint/ai-agent-runtime-protection-overview
  - https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/the-next-frontier-in-endpoint-security-securing-local-ai-agents-with-microsoft-d/4524651
Acknowledgements:
  - Name: Ivan CF
---

