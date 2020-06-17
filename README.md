# Tezos price oracle

The Tezos Price Oracle receives price updates from a centralized poster, who pulls the prices from coingecko. 

## Contracts

### Oracle: 
- [Better call dev link](https://better-call.dev/bigmap/carthagenet/KT1WBqqaCzh8MVD65fvL2CHmEJGrNahHRw4A)
- [Contract in the Ligo IDE online](https://ide.ligolang.org/p/KlnD-FsYFR4UbYWlV3mNlA)

### Inspector:
- [Better call dev link](https://better-call.dev/bigmap/carthagenet/KT1XqUyWpK5Dc97E2NUtdfVo3n1hwxoTbd6r)
- [Contract in the Ligo IDE online](https://ide.ligolang.org/p/H_Kj28bncDwsBGKr-wJg2Q)

## Architecture
<img src="https://i.ibb.co/qjvdtn7/Untitled-Diagram-1.png" width="600">

## Installation

To deploy the Tezos price oracle you can use [the Ligo IDE online](https://ide.ligolang.org/p/ceSGJQnxzT7VreZbRshyJA)

You will need [yarn](https://yarnpkg.com/lang/en/docs/install/) or [npm](https://docs.npmjs.com/cli/install) installed.

```
    git clone https://github.com/protofire/tezos-price-oracle
    cd tezos-price-oracle
    yarn
```

## Poster Script

The poster is a simple centralized application created with oclif, that reads from coingecko the prices of Tez and Bitcoin and post them to the blockchain.

### Running
The poster command requires some arguments to run:

- ORACLE_ADDRESS: The oracle address where the contract is deployed.
- TEZOS_RPC: a Tezos public rpc.
- Some properties from a wallet: MNEMONIC, SECRET, PKH, PASSWORD, EMAIL, to be used as a signer. This wallet must be whitelisted by the oracle contract. You can download some faucet from [here](https://faucet.tzalpha.net/).
```
MNEMONIC="MNEMONIC" SECRET="SECRET" PKH="PKH" PASSWORD="PASSWORD" EMAIL="EMAIL" TEZOS_RPC="https://api.tez.ie/rpc/carthagenet/" ORACLE_ADDRESS="ORACLE_ADDRESS"  ./bin/run assets
``` 

### Discussion
For any concerns with the oracle, please open an issue 

### Licensing
[MIT](https://github.com/protofire/tezos-defi-dapp/blob/master/LICENSE)
