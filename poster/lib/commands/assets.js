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
    Assets.description = 'Send prices updates from coinbase';
    Assets.examples = [
        `$ tezos-poster fetch`,
    ];
    Assets.flags = {
        help: command_1.flags.help({ char: 'h' }),
    };
    Assets.args = [{ name: 'file' }];
    return Assets;
})();
exports.default = Assets;
