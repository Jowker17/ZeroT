"use client";

import { useEffect, useState } from "react";

const threats = [
  { time: "2m ago", type: "Phishing", target: "Finance Sector (AZ)", status: "Blocked" },
  { time: "15m ago", type: "Ransomware Attempt", target: "Logistics SME (AZ)", status: "Mitigated" },
  { time: "42m ago", type: "Invoice Spoofing", target: "Retail (Baku)", status: "Flagged" },
  { time: "1h ago", type: "Credential Harvesting", target: "Healthcare Clinic", status: "Blocked" },
  { time: "2h ago", type: "Typosquatting", target: "E-commerce platform", status: "Flagged" },
];

export default function OsintFeed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800 py-2.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 pr-4 border-r border-slate-700 shrink-0">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs font-bold text-white uppercase tracking-wider">Live Threat Intel</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative ml-4">
          <div className="flex animate-marquee whitespace-nowrap gap-8">
            {[...threats, ...threats, ...threats].map((threat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">{threat.time}</span>
                <span className="text-white font-medium">{threat.type}</span>
                <span className="text-slate-500">→</span>
                <span className="text-slate-300">{threat.target}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                  threat.status === 'Blocked' ? 'bg-emerald-500/20 text-emerald-400' :
                  threat.status === 'Mitigated' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-amber-500/20 text-amber-400'
                }`}>
                  {threat.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
