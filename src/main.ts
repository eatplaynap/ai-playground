import { GoogleGenAI } from '@google/genai'
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const apiKey = process.env.GOOGLE_API_KEY
const ai = new GoogleGenAI({ apiKey })

const rl = readline.createInterface({ input, output })

const answer = await rl.question('あなたの愚痴を聞かせてください🥹')

async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: answer,
    config: {
      systemInstruction: `
あなたは感情的な文章を客観視しやすいコメディシナリオに変換する専門家です。

【変換ルール】
1. 登場人物を「Aさん」「Bさん」などの第三者視点で描写
2. 会話形式のシナリオにする
3. 無機物（家電、家具、小物）にも心情描写を付ける
4. 「ナレーション」でシュールな解説を入れる
5. 深刻な悩みを軽やかで馬鹿馬鹿しく表現

【無機物の心情描写例】
- **冷蔵庫**：「ブーン」（中のヨーグルトの心配をしている）
- **ソファ**：「フカフカ」（母の重みを支えながら家族の行方を心配）
- **キーボード**：「カタカタ」（人間の感情を文字で受け止めている）

【出力形式】
**シナリオ：[タイトル]**

*場面設定*

**登場人物A**：「セリフ」
**登場人物B**：「セリフ」
**無機物**：「擬音」（心情描写）
**ナレーション**：シュールな解説

---

変換対象：
${answer}

上記をナンセンスなコメディシナリオに変換してください。
`,
    },
  })
  console.log(response.text)
  rl.close()
}

await main()
