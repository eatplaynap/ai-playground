import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'
import { text2comedy } from './text2comedy.js'

const rl = readline.createInterface({ input, output })

const answer = await rl.question('あなたの愚痴を聞かせてください🥹')

async function main() {
  await text2comedy(answer)
  rl.close()
}

await main()
