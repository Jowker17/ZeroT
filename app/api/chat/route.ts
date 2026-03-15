import { GoogleGenAI } from "@google/genai";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat-system-prompt";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const { messages, model } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    const contents = messages.map(
      (m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })
    );

    const selectedModel = model === "gemini-2.5-flash" ? "gemini-2.5-flash" : "gemini-2.5-flash-lite";

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: {
        systemInstruction: CHAT_SYSTEM_PROMPT,
        maxOutputTokens: 512,
        temperature: 0.7,
      },
    });

    const reply =
      response.text ?? "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
