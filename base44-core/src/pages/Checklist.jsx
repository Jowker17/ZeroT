import React from 'react';

export default function Checklist() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Response Tasks</h1>
      <p className="text-gray-500 mb-6">Checklist with role-based assignments, priority levels, and progress tracking.</p>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center gap-4">
          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">Revoke compromised session tokens</h3>
            <p className="text-sm text-gray-500">Assigned to: IT Admin • Priority: High</p>
          </div>
          <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold">In Progress</span>
        </div>
        
        <div className="p-4 border-b border-gray-200 flex items-center gap-4 bg-gray-50">
          <input type="checkbox" checked readOnly className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-500 line-through">Notify impacted users of phishing attempt</h3>
            <p className="text-sm text-gray-400">Assigned to: HR • Priority: Medium</p>
          </div>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Completed</span>
        </div>
      </div>
    </div>
  );
}
