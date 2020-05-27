poster
======

Simple application to pull prices from a set of source feeds and post them to the blockchain

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/poster.svg)](https://npmjs.org/package/poster)
[![Downloads/week](https://img.shields.io/npm/dw/poster.svg)](https://npmjs.org/package/poster)
[![License](https://img.shields.io/npm/l/poster.svg)](https://github.com/protofire/tezos-price-oracle/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g poster
$ poster COMMAND
running command...
$ poster (-v|--version|version)
poster/0.0.0 linux-x64 node-v12.13.0
$ poster --help [COMMAND]
USAGE
  $ poster COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`poster assets [FILE]`](#poster-assets-file)
* [`poster help [COMMAND]`](#poster-help-command)

## `poster assets [FILE]`

Send prices updates from coinbase

```
USAGE
  $ poster assets [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ poster fetch
```

_See code: [src/commands/assets.ts](https://github.com/protofire/tezos-price-oracle/blob/v0.0.0/src/commands/assets.ts)_

## `poster help [COMMAND]`

display help for poster

```
USAGE
  $ poster help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_
<!-- commandsstop -->
