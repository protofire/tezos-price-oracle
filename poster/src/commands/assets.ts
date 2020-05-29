import {Command, flags} from '@oclif/command'
import {fetchAssets, updateAssets} from '../helpers/assets'

export default class Assets extends Command {
  static description = 'Send prices updates from coingecko'

  static examples = [
    `$ MNEMONIC="lol crucial lol blush phone private found apple lol star minute distance twice float fabric" SECRET="b0b126e2454df1984cedff01444ac202eaaa0f4d" PKH="tz1NBNvSzgkva2km7VXbEmdKEbS48KerM8Rw" PASSWORD="1234412" EMAIL="motiakmb.sdfsdfsd@tezos.example.org" TEZOS_RPC="https://api.tez.ie/rpc/carthagenet/" ORACLE_ADDRESS="KT1FfXi4UEZfceSd4k7ZXpxkAeFxXDYxvqP9"  tezos-poster assets`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    try {
      const assets = await fetchAssets()
      await updateAssets(assets)

      this.log(`Assets updated`)
    } catch (e) {
      this.error(e.message, { exit: 1 })
    }
  }
}
