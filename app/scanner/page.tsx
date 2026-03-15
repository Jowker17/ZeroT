"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import ChatWidget from "@/components/chat-widget";

interface DatabaseCheck {
  name: string;
  status: "clean" | "flagged" | "untested";
}

interface ScanReport {
  status: "malicious" | "suspicious" | "safe";
  riskScore: number;
  summaryTitle: string;
  databaseChecks: DatabaseCheck[];
  aiAnalysis: string;
  recommendedAction: string;
}

export default function ScannerPage() {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState<"url" | "email">("url");
  const [scanning, setScanning] = useState(false);
  const [report, setReport] = useState<ScanReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [scanStep, setScanStep] = useState(0);

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    setScanning(true);
    setReport(null);
    setError(null);
    setScanStep(1); // Starting databases
    
    // Simulate UI progression before API resolves
    const stepInterval = setInterval(() => {
      setScanStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 800);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, type: inputType, model: "gemini-2.5-flash-lite" }),
      });

      clearInterval(stepInterval);
      setScanStep(4);

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to scan.");
      }

      const data = await res.json();
      setReport(data);
    } catch (err: any) {
      clearInterval(stepInterval);
      setError(err.message || "An error occurred during the scan.");
    } finally {
      setScanning(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navbar />

      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Hybrid Threat Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              ZeroT Threat Scanner
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Simulate our industry-grade double-check architecture. Paste a suspicious link or email text to see how we blend database lookups with semantic AI analysis.
            </p>
          </div>

          {/* Input Form */}
          <div className="glass-panel-strong rounded-3xl p-6 md:p-8 float-shadow mb-8 animate-fade-up">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setInputType("url")}
                className={`flex-1 py-3 text-sm font-medium rounded-xl transition-all ${
                  inputType === "url"
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Scan a URL / Link
              </button>
              <button
                onClick={() => setInputType("email")}
                className={`flex-1 py-3 text-sm font-medium rounded-xl transition-all ${
                  inputType === "email"
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Scan Email Text
              </button>
            </div>

            <form onSubmit={handleScan}>
              <div className="relative mb-4">
                {inputType === "url" ? (
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. https://rnicrosoft.com/login"
                    className="w-full pl-5 pr-5 py-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-zerot-400 focus:ring-4 focus:ring-zerot-400/20 transition-all text-lg"
                    disabled={scanning}
                  />
                ) : (
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste the suspicious email contents here..."
                    className="w-full pl-5 pr-5 py-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-zerot-400 focus:ring-4 focus:ring-zerot-400/20 transition-all text-base min-h-[120px] resize-none"
                    disabled={scanning}
                  />
                )}
              </div>

              <div className="flex justify-end">
                <Button variant="primary" size="lg" disabled={scanning || !input.trim()}>
                  {scanning ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scanning...
                    </>
                  ) : (
                    <>
                      Run Hybrid Scan
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Scanning Progress Indicators */}
          {scanning && (
            <div className="w-full space-y-3 px-4 animate-fade-in">
              <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${scanStep >= 1 ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400'}`}>
                {scanStep > 1 ? <span className="text-teal-500">✓</span> : scanStep === 1 ? <span className="animate-spin w-4 h-4 border-2 border-t-zerot-500 border-r-transparent border-b-transparent border-l-transparent rounded-full" /> : <span className="w-4 h-4" />}
                <span className="text-sm font-medium">1. Querying Global Threat Databases (VirusTotal, URLScan)...</span>
              </div>
              <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${scanStep >= 2 ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400'}`}>
                {scanStep > 2 ? <span className="text-teal-500">✓</span> : scanStep === 2 ? <span className="animate-spin w-4 h-4 border-2 border-t-zerot-500 border-r-transparent border-b-transparent border-l-transparent rounded-full" /> : <span className="w-4 h-4" />}
                <span className="text-sm font-medium">2. Running Open Source Intelligence (OSINT) Checks...</span>
              </div>
              <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${scanStep >= 3 ? 'bg-white shadow-sm text-slate-800' : 'text-slate-400'}`}>
                {scanStep > 3 ? <span className="text-teal-500">✓</span> : scanStep === 3 ? <span className="animate-spin w-4 h-4 border-2 border-t-zerot-500 border-r-transparent border-b-transparent border-l-transparent rounded-full" /> : <span className="w-4 h-4" />}
                <span className="text-sm font-medium">3. LLM Semantic & Syntax Heuristic Analysis...</span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 animate-fade-up">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold">Scan Failed</h4>
                  <p className="text-sm opacity-90">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Report Results */}
          {report && !scanning && (
            <div className="glass-panel-strong border-t-4 rounded-3xl overflow-hidden float-shadow animate-fade-up"
                 style={{ borderTopColor: report.status === 'malicious' ? '#ef4444' : report.status === 'suspicious' ? '#f59e0b' : '#10b981' }}>
              
              <div className="p-6 md:p-8 bg-white/50 border-b border-slate-100">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div>
                    <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-3
                      ${report.status === 'malicious' ? 'bg-red-100 text-red-700' : 
                        report.status === 'suspicious' ? 'bg-amber-100 text-amber-700' : 
                        'bg-emerald-100 text-emerald-700'}`}>
                      {report.status}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{report.summaryTitle}</h2>
                  </div>
                  
                  <div className="text-center bg-white rounded-2xl p-4 shadow-sm border border-slate-100 min-w-[120px]">
                    <div className="text-sm text-slate-500 font-medium mb-1">Risk Score</div>
                    <div className={`text-4xl font-black ${report.riskScore > 70 ? 'text-red-500' : report.riskScore > 30 ? 'text-amber-500' : 'text-emerald-500'}`}>
                      {report.riskScore}<span className="text-lg text-slate-400">/100</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                {/* Left Column: AI & Action */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-zerot-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      AI Plain English Analysis
                    </h4>
                    <p className="text-slate-600 leading-relaxed bg-white/60 p-4 rounded-2xl border border-slate-100">
                      {report.aiAnalysis}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-zerot-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      Recommended Action
                    </h4>
                    <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-inner">
                      <p className="font-medium">{report.recommendedAction}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Database Checks */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-zerot-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                    Simulated Threat Intel Databases
                  </h4>
                  <div className="space-y-3">
                    {report.databaseChecks.map((check, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <span className="text-sm font-medium text-slate-700">{check.name}</span>
                        {check.status === 'clean' ? (
                          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> Clean
                          </span>
                        ) : check.status === 'flagged' ? (
                          <span className="flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg> Flagged
                          </span>
                        ) : (
                          <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                            Untested
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-4 text-center">
                    Note: Database status is AI-simulated for the MVP demonstration.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <ChatWidget />
      <Footer />
    </div>
  );
}
