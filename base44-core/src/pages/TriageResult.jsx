import React from 'react';

export default function TriageResult() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Triage Complete</h1>
        <p className="text-lg text-gray-500 mt-2">The ZeroT engine has analyzed the submission.</p>
      </div>
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-amber-500">
        <div className="p-8 text-center border-b border-gray-100">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm mb-4">
            Suspicious
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Potential Credential Harvesting</h2>
        </div>
        
        <div className="p-8 bg-gray-50">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Recommended Immediate Actions</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-bold text-gray-900">Do not click any links or download attachments.</p>
                <p className="text-sm text-gray-500 mt-1">The links point to unverified third-party endpoints mimicking login screens.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white bg-slate-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-bold text-gray-900">Block the sender domain.</p>
                <p className="text-sm text-gray-500 mt-1">Add *.*@rnicrosoft-update.com to your email gateway blocklist.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="p-6 bg-white flex justify-between items-center border-t border-gray-100">
          <button className="text-gray-500 font-medium hover:text-gray-900">Discard</button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-all">
            Create Response Task
          </button>
        </div>
      </div>
    </div>
  );
}
