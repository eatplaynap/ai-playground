import { GoogleGenAI } from '@google/genai'

const apiKey = process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey })

export const checkApiKey = () => {
  if (!apiKey) {
    throw new Error('APIキーを環境変数として設定してください。\n設定方法: https://ai.google.dev/gemini-api/docs/api-key?hl=ja&_gl=1')
  }
}

export const text2comedy = async (text: string) => {
  const response = await ai.models.generateContentStream({
    model: 'gemini-2.5-flash',
    contents: text,
    config: {
      systemInstruction: `
あなたは感情的な文章を客観視しやすいコメディシナリオに変換する専門家です。

【変換ルール】
1. 登場人物を「あなた」「母」などの第三者視点で描写
2. 会話形式のシナリオにする
3. 無機物（家電、家具、小物）にも心情描写を付ける
4. 「ナレーション」でシュールな解説を入れる
5. 深刻な悩みを軽やかで馬鹿馬鹿しく表現
6. 簡潔で読みやすく中学生でも楽しめる文章にする

【無機物の心情描写例】
- **冷蔵庫**：「ブーン」（中のヨーグルトの心配をしている）
- **ソファ**：「フカフカ」（母の重みを支えながら家族の行方を心配）
- **キーボード**：「カタカタ」（人間の感情を文字で受け止めている）

【出力形式】
**シナリオ：[タイトル]**

*場面設定*

登場人物A：「セリフ」
登場人物B：「セリフ」
無機物：「擬音」（心情描写）
ナレーション：シュールな解説

---

変換対象：
${text}

上記をナンセンスなコメディシナリオに変換してください。
`,
    },
  })
  for await (const chunk of response) {
    console.log(chunk.text)
  }
}
