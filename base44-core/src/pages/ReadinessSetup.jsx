import React, { useState } from 'react';

export default function ReadinessSetup() {
  const [score, setScore] = useState(45);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Readiness Baseline</h1>
          <p className="text-gray-500">Assess your current security posture against SME industry standards.</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-gray-500 uppercase">Current Score</div>
          <div className="text-4xl font-black text-amber-500">{score}/100</div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-gray-700">Identity & Access</div>
        <div className="p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50">
          <div>
            <div className="font-bold text-gray-900">Multi-Factor Authentication (MFA)</div>
            <div className="text-sm text-gray-500">Required for all employee accounts accessing company data.</div>
          </div>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-sm">Implemented</button>
        </div>
        <div className="p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50">
          <div>
            <div className="font-bold text-gray-900">Privileged Access Management</div>
            <div className="text-sm text-gray-500">Admin accounts are separated from daily use accounts.</div>
          </div>
          <button className="bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700 px-4 py-2 rounded-lg font-bold text-sm transition-colors" onClick={() => setScore(score + 15)}>Mark Implemented</button>
        </div>
      </div>
    </div>
  );
}
