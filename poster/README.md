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
* [`poster hello [FILE]`](#poster-hello-file)
* [`poster help [COMMAND]`](#poster-help-command)

## `poster hello [FILE]`

describe the command here

```
USAGE
  $ poster hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ poster hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/protofire/tezos-price-oracle/blob/v0.0.0/src/commands/hello.ts)_

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
