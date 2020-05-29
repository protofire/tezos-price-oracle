"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const assets_1 = require("../helpers/assets");
let Assets = /** @class */ (() => {
    class Assets extends command_1.Command {
        async run() {
            try {
                const assets = await assets_1.fetchAssets();
                await assets_1.updateAssets(assets);
                this.log(`Assets updated`);
            }
            catch (e) {
                this.error(e.message, { exit: 1 });
            }
        }
    }
    Assets.description = 'Send prices updates from coingecko';
    Assets.examples = [
        `$ MNEMONIC="lol crucial lol blush phone private found apple lol star minute distance twice float fabric" SECRET="b0b126e2454df1984cedff01444ac202eaaa0f4d" PKH="tz1NBNvSzgkva2km7VXbEmdKEbS48KerM8Rw" PASSWORD="1234412" EMAIL="motiakmb.sdfsdfsd@tezos.example.org" TEZOS_RPC="https://api.tez.ie/rpc/carthagenet/" ORACLE_ADDRESS="KT1FfXi4UEZfceSd4k7ZXpxkAeFxXDYxvqP9"  tezos-poster assets`,
    ];
    Assets.flags = {
        help: command_1.flags.help({ char: 'h' }),
    };
    return Assets;
})();
exports.default = Assets;
