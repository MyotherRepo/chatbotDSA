# 🤖 DSA Chatbot using Gemini 2.0 Flash (Google GenAI)

This project is an AI-powered chatbot built using the **Gemini 2.0 Flash model** from Google GenAI. It is designed to answer questions **only related to Data Structures and Algorithms (DSA)**. Any unrelated query is politely declined.

Features

- Uses `@google/genai` with Gemini 2.0 Flash model.
- Responds to user queries related to DSA.
- Politely ignores non-DSA questions.
- Custom system instructions for consistent and focused answers.

Example Behavior

- **User asks:** "What is a binary tree?"
  > *A binary tree is a hierarchical data structure in which each node has at most two children...*

- **User asks:** "Who is the president of the USA?"
  > *Sorry, I can't answer that. Ask something related to data structures and algorithms.*

---

Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/chatbotDSA.git
   cd chatbotDSA
2. Install dependencies:
    npm install
3. Add your API key:
    const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY_HERE" });

   
5. Add your API key:
