import React from 'react';

export default function Report() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/reports" className="text-teal-600 hover:text-teal-800 font-medium">← Back to Reports</a>
        <h1 className="text-3xl font-bold text-gray-900">Incident REP-2026-049</h1>
        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold uppercase">Critical</span>
      </div>
      
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Threat Payload</h2>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-red-400 overflow-x-auto">
              <div>From: "IT Support" &lt;admin@rnicrosoft-update.com&gt;</div>
              <div>Subject: URGENT: Password Expiry Notice</div>
              <div className="mt-4 text-gray-300">
                Your Office365 password will expire in 2 hours.<br/>
                Please click the link below to retain your current password:<br/><br/>
                <a href="#" className="underline text-blue-400">https://login.rnicrosoft-update.com/auth</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 flex items-center gap-2">
              <span className="text-blue-500">🤖</span> AI Triage Analysis
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This is a high-confidence phishing attempt using <strong>typosquatting</strong>. 
              The sender domain uses "rnicrosoft" (R-N) instead of "microsoft" (M) to deceive the recipient. 
              The sense of urgency ("URGENT", "2 hours") is a classic social engineering tactic.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wider">Timeline</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Reported via Intake</div>
                  <div className="text-xs text-gray-500">Today, 14:30 AZT</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                <div>
                  <div className="text-sm font-bold text-gray-900">AI Triage Completed</div>
                  <div className="text-xs text-gray-500">Today, 14:31 AZT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
