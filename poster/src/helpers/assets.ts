import { Tezos } from '@taquito/taquito'
import { InMemorySigner } from '@taquito/signer'

interface asset {
    symbol: string
    price: string
}

export const fetchAssets = async (): Promise<asset[]> => {
    const rp = require('request-promise')
    const tezosRequestOptions = {
        method: 'GET',
        uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tezos',
        json: true,
        gzip: true
    }

    const bitcoinRequestOptions = {
        method: 'GET',
        uri: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin',
        json: true,
        gzip: true
    }

    const assetsFromApi = await Promise.all([rp(tezosRequestOptions), rp(bitcoinRequestOptions)])
    const assets = assetsFromApi.map((asset) => {
        return {
            symbol: asset[0].symbol,
            price: asset[0].current_price,
        }
    })
    return assets
}

export const updateAssets = async (assets: asset[]) => {
    const email: string = (process.env.EMAIL as string)
    const password: string = (process.env.PASSWORD as string)
    const mnemonic: string = (process.env.MNEMONIC as string)
    const rpc: string = (process.env.TEZOS_RPC as string)
    const oracleAddress: string = (process.env.ORACLE_ADDRESS as string)

    const signer = InMemorySigner.fromFundraiser(email, password, mnemonic);

    Tezos.setProvider({ rpc, signer })
    const contract = await Tezos.contract.at(oracleAddress)

    for (let asset of assets) {
        const {symbol, price} = asset
        const operation = await contract.methods.setPrice(symbol, `'${price}'`).send()
        await operation.confirmation()
    }
}