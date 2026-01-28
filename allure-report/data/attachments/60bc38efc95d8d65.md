# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - link "logo Sigmatic" [ref=e7] [cursor=pointer]:
            - /url: /
            - img "logo" [ref=e8]
            - heading "Sigmatic" [level=6] [ref=e9]
          - button [ref=e10] [cursor=pointer]:
            - img [ref=e11]
        - list [ref=e16]:
          - listitem [ref=e17]:
            - separator [ref=e18]:
              - generic [ref=e19]: MAIN
          - generic "Dashboard" [ref=e20]:
            - listitem [ref=e21]:
              - link "Dashboard" [ref=e22] [cursor=pointer]:
                - /url: /dashboard/
                - img [ref=e25]
                - paragraph [ref=e31]: Dashboard
          - generic "Smart Assistance" [ref=e32]:
            - listitem [ref=e33]:
              - link "Smart Assistance" [ref=e34] [cursor=pointer]:
                - /url: /smart-assistance/
                - img [ref=e37]
                - generic [ref=e40]:
                  - paragraph [ref=e41]: Smart Assistance
                  - img [ref=e44]
      - generic [ref=e46]:
        - banner [ref=e47]:
          - generic [ref=e50]:
            - generic [ref=e51] [cursor=pointer]:
              - text: Onboard
              - img [ref=e53]
            - img [ref=e57] [cursor=pointer]
        - main [ref=e60]:
          - iframe [ref=e64]:
            
    - region "Notifications alt+T"
  - alert [ref=e65]: Sigmatic
```