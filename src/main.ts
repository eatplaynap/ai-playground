import { GoogleGenAI } from "@google/genai";
import 'dotenv/config'

const apiKey = process.env.GOOGLE_API_KEY;
const ai = new GoogleGenAI({apiKey});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "How does AI work?",
  });
  console.log(response.text);
}

await main();