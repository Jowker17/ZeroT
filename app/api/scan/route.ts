import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const SCAN_SYSTEM_PROMPT = `You are the ZeroT Core Analysis Engine.
You perform hybrid threat intelligence scanning on URLs, emails, and text.
Your job is to act as a simulator for a real backend that checks multiple databases AND performs AI heuristics.
ALWAYS return your response in strictly valid JSON format. Do not use markdown blocks like \`\`\`json. Just return the raw JSON object.

Based on the user's input, generate a realistic but highly educated threat intelligence report.
If it is obviously a famous phishing trick (e.g. rnicrosoft.com, paypal-update-2026), flag it as malicious and simulate database hits.
If it is safe (e.g. google.com, apple.com), flag it as safe.

JSON Schema to follow exactly:
{
  "status": "malicious" | "suspicious" | "safe",
  "riskScore": number (0-100, where 100 is most dangerous),
  "summaryTitle": string (A concise 3-4 word title of the threat),
  "databaseChecks": [
    { "name": "Google Safe Browsing", "status": "clean" | "flagged" | "untested" },
    { "name": "URLScan.io Heuristics", "status": "clean" | "flagged" | "untested" },
    { "name": "PhishTank Blacklist", "status": "clean" | "flagged" | "untested" },
    { "name": "OSINT (Reddit/Twitter)", "status": "clean" | "flagged" | "untested" }
  ],
  "aiAnalysis": string (A 2-3 sentence explanation in plain English for an SME owner detailing exactly WHY this is safe or dangerous. E.g. "We detected a typosquatting attempt where 'rn' is used to fake the letter 'm'."),
  "recommendedAction": string (Clear, direct instruction on what the employee should do next)
}`;

export async function POST(req: NextRequest) {
  try {
    const { input, type, model } = await req.json();

    if (!input) {
      return NextResponse.json({ error: "Input is required" }, { status: 400 });
    }

    const selectedModel = model === "gemini-2.5-flash" ? "gemini-2.5-flash" : "gemini-2.5-flash-lite";

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: [
        {
          role: "user",
          parts: [{ text: `Analyze this ${type}:\n\n${input}` }],
        },
      ],
      config: {
        systemInstruction: SCAN_SYSTEM_PROMPT,
        maxOutputTokens: 800,
        temperature: 0.2, // Low temp for more deterministic, JSON-compliant output
      },
    });

    const rawText = response.text || "{}";
    
    // Attempt to parse JSON. Sometimes Gemini returns with ```json wrappers despite instructions.
    let parsedData;
    try {
      const cleaned = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
      parsedData = JSON.parse(cleaned);
    } catch (e) {
      console.error("Failed to parse Gemini JSON:", rawText);
      throw new Error("Failed to generate a valid threat report structure.");
    }

    return NextResponse.json(parsedData);
  } catch (error: any) {
    console.error("Scan API error:", error);
    return NextResponse.json(
      { error: error?.message || "Analysis failed due to a server error." },
      { status: 500 }
    );
  }
}
