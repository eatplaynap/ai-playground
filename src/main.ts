import { GoogleGenAI } from '@google/genai'

const apiKey = process.env.GOOGLE_API_KEY
const ai = new GoogleGenAI({ apiKey })

async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: 'Do you know what tomorrow will bring?',
  })
  console.log(response.text)
}

await main()
