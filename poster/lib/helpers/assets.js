"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAssets = exports.fetchAssets = void 0;
const taquito_1 = require("@taquito/taquito");
const signer_1 = require("@taquito/signer");
exports.fetchAssets = async () => {
    const rp = require('request-promise');
    const tezosRequestOptions = {
        method: 'GET',
        uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tezos',
        json: true,
        gzip: true
    };
    const bitcoinRequestOptions = {
        method: 'GET',
        uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin',
        json: true,
        gzip: true
    };
    const assetsFromApi = await Promise.all([rp(tezosRequestOptions), rp(bitcoinRequestOptions)]);
    const assets = assetsFromApi.map((asset) => {
        return {
            symbol: asset[0].symbol,
            price: asset[0].current_price,
        };
    });
    return assets;
};
exports.updateAssets = async (assets) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const mnemonic = process.env.MNEMONIC;
    const rpc = process.env.TEZOS_RPC;
    const oracleAddress = process.env.ORACLE_ADDRESS;
    const signer = signer_1.InMemorySigner.fromFundraiser(email, password, mnemonic);
    taquito_1.Tezos.setProvider({ rpc, signer });
    const contract = await taquito_1.Tezos.contract.at(oracleAddress);
    for (let asset of assets) {
        const { symbol, price } = asset;
        const operation = await contract.methods.setPrice(symbol, `${price}`).send();
        await operation.confirmation();
    }
};
