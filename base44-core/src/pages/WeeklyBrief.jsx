import React from 'react';

export default function WeeklyBrief() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Weekly Risk Brief</h1>
      <p className="text-gray-500 mb-6">Stats overview, critical missing controls, and AI-generated executive summary.</p>
      
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-lg mb-8">
        <h2 className="text-xl font-bold text-teal-400 mb-4 flex items-center gap-2">
          <span>✨</span> AI Executive Summary
        </h2>
        <p className="text-lg leading-relaxed text-gray-200">
          This week, ZeroT intercepted 3 high-confidence phishing attempts targeting the finance department. 
          Your overall readiness score improved by 5% following the implementation of mandatory MFA. 
          The top priority for next week is resolving the 2 open response tasks related to the unauthorized AI shadow IT discovery.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">Top Targeted Departments</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-between"><span>Finance</span> <span className="font-bold">45%</span></li>
            <li className="flex justify-between"><span>HR</span> <span className="font-bold">30%</span></li>
            <li className="flex justify-between"><span>Sales</span> <span className="font-bold">25%</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
