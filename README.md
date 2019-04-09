# coins.ph-challenge
BitGo SPA for the coins.ph challenge job

## Description
This app uses [BitGo SDK](https://github.com/BitGo/BitGoJS) for interact with [BitGo API](https://test.bitgo.com/api/v1).
With this app you can create wallets and transactions, view their attributes (label, date, balance etc.)

## Instruction
1. Create [BitGo account](https://test.bitgo.com/)
2. Confirm your email 
3. Run `docker pull dmshamonov/bitgo:1.0.0`
4. Run `docker run --name bitgo -d -p 8080:80 dmshamonov/bitgo:1.0.0`
5. Open in your browser `localhost:8080` 
6. You can get some btc for test here [coinfaucet.eu](https://coinfaucet.eu/en/btc-testnet/)
