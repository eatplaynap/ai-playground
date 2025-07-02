import { GoogleGenAI } from "@google/genai";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const apiKey = process.env.GOOGLE_API_KEY
const ai = new GoogleGenAI({ apiKey })



const rl = readline.createInterface({ input, output });

const answer = await rl.question("What do you want to know?");

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: answer,
  });
  console.log(response.text);
}

await main()
