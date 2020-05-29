import {Command, flags} from '@oclif/command'
import {fetchAssets, updateAssets} from '../helpers/assets'

export default class Assets extends Command {
  static description = 'Send prices updates from coinbase'

  static examples = [
    `$ tezos-poster fetch`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

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
