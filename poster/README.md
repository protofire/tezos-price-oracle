tezos-poster
======

Simple application to pull prices from coingecko and post them to the Tezos blockchain

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tezos-poster.svg)](https://npmjs.org/package/tezos-poster)
[![Downloads/week](https://img.shields.io/npm/dw/tezos-poster.svg)](https://npmjs.org/package/tezos-poster)
[![License](https://img.shields.io/npm/l/tezos-poster.svg)](https://github.com/protofire/tezos-price-oracle/blob/master/poster/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tezos-poster
$ tezos-poster COMMAND
running command...
$ tezos-poster (-v|--version|version)
tezos-poster/0.0.1 linux-x64 node-v8.11.3
$ tezos-poster --help [COMMAND]
USAGE
  $ tezos-poster COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tezos-poster assets`](#tezos-poster-assets)
* [`tezos-poster help [COMMAND]`](#tezos-poster-help-command)

## `tezos-poster assets`

Send prices updates from coingecko

```
USAGE
  $ tezos-poster assets

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ MNEMONIC="lol crucial lol blush phone private found apple lol star minute distance twice float fabric" 
  SECRET="b0b126e2454df1984cedff01444ac202eaaa0f4d" PKH="tz1NBNvSzgkva2km7VXbEmdKEbS48KerM8Rw" PASSWORD="1234412" 
  EMAIL="motiakmb.sdfsdfsd@tezos.example.org" TEZOS_RPC="https://api.tez.ie/rpc/carthagenet/" 
  ORACLE_ADDRESS="KT1FfXi4UEZfceSd4k7ZXpxkAeFxXDYxvqP9"  tezos-poster assets
```

_See code: [src/commands/assets.ts](https://github.com/protofire/tezos-price-oracle/blob/v0.0.1/src/commands/assets.ts)_

## `tezos-poster help [COMMAND]`

display help for tezos-poster

```
USAGE
  $ tezos-poster help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_
<!-- commandsstop -->
