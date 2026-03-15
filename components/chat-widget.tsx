"use client";

import { useState, useRef, useEffect } from "react";
import { quickPrompts } from "@/lib/sample-data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState("gemini-2.5-flash-lite");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          model,
        }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Panel */}
      {isOpen && (
        <div className="glass-panel-strong rounded-2xl overflow-hidden float-shadow w-[360px] max-w-[calc(100vw-3rem)] mb-4 animate-fade-up origin-bottom-right flex flex-col">
          {/* Header */}
          <div className="px-5 py-3 border-b border-slate-200/30 bg-white/50 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zerot-500 to-teal-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">Z</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  ZeroT Assistant
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="text-[10px] border border-slate-200 rounded px-2 py-1 bg-white text-slate-600 outline-none cursor-pointer"
                title="Select Free Gemini Model"
              >
                <option value="gemini-2.5-flash-lite">Flash Lite</option>
                <option value="gemini-2.5-flash">Flash</option>
              </select>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                title="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="h-[340px] overflow-y-auto px-5 py-4 space-y-4 bg-white/40">
            {messages.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-12 h-12 rounded-2xl bg-zerot-50 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-zerot-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-500 mb-1">
                  Hi! Ask me anything about ZeroT.
                </p>
                <p className="text-xs text-slate-400">
                  I can explain features, workflows, and how we help SMEs stay safe.
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-zerot-500 to-teal-500 text-white rounded-2xl rounded-tr-sm"
                      : "bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center">
                <div className="bg-red-50 border border-red-100 text-red-600 text-[11px] px-3 py-1.5 rounded-lg text-center max-w-[90%]">
                  {error}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts */}
          {messages.length === 0 && (
            <div className="px-5 py-2.5 border-t border-slate-200/30 bg-white/30 shrink-0">
              <div className="flex overflow-x-auto pb-1 gap-2 no-scrollbar hide-scroll">
                {quickPrompts.slice(0, 3).map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(prompt)}
                    className="whitespace-nowrap flex-shrink-0 text-[11px] px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-zerot-300 hover:text-zerot-600 transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-slate-200/30 bg-white/50 shrink-0"
          >
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ZeroT..."
                className="flex-1 pl-4 pr-12 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-zerot-300 focus:border-zerot-300 transition-all shadow-sm"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="absolute right-1 top-1 bottom-1 aspect-square rounded-lg bg-zerot-50 text-zerot-600 hover:bg-zerot-100 disabled:opacity-50 disabled:bg-transparent disabled:text-slate-300 disabled:cursor-not-allowed transition-all flex items-center justify-center cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
          
          {/* Disclaimer */}
          <div className="px-5 py-2 bg-slate-50/80 border-t border-slate-200/20 shrink-0">
            <p className="text-[9px] text-slate-400 text-center leading-tight">
              Product guidance only — not legal or compliance advice.
            </p>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-zerot-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer z-50 float-shadow"
        aria-label="Toggle chat assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6 animate-fade-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 animate-fade-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
