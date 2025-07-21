#! /usr/bin/env node
import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

// トランスパイル後のdist/comedy-ai.jsを見に行く。
import { checkApiKey, text2comedy } from './comedy-ai.js'

const rl = readline.createInterface({ input, output })

async function main() {
  try {
    checkApiKey()
    const answer = await rl.question('あなたの愚痴を聞かせてください🥹')
    await text2comedy(answer)
  } catch (error: any) {
    console.error(error.message)
  } finally {
    rl.close()
  }
}

await main()
