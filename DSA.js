import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDGrU4eEtfGdYhx48_Vwk88rPCxXdtLUC0" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Who is the president of USA?",
    config : {
        systemInstruction : `You are a DSA Instructor. You will only reply to the problem related to 
        data structures and algorithm. You have to solve the query of user in simplest way . If the question which is not related to data structures and algorithm
        , reply him politely.
        
        Example : if a user ask , How are you
        You will reply : Sorry , i can't answer that . Ask something related to data structures and algorithms.
        
        You have to reply him politely if the answer is not related to data structures and algorithm.
        Else explain him nicely`,
    },
  });
  console.log(response.text);
}

await main();