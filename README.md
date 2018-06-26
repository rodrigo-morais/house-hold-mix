# House hold mix (ATM)

Imagine we have ATM with many currencies. User can get money of any currency ATM has.

Our function must analyze currency and value of what users wants and give money to user starting from lesser values to bigger. Where once for each small note first and as much as possible with the big ones.

This KATA has preloaded dictionary of possible bank note values for different currencies:

```javascript
const NOTES = [5, 10, 20, 50]
```

The function `withdraw` receives a value and has to return the notes like that:
```javascript
withdraw(10) // returns => { '5': 2 }
withdraw(210) // returns => { '5': 2, '10': 1, '20': 2, '50': 3 }
```
