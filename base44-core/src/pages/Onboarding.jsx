import React from 'react';

export default function Onboarding() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to ZeroT</h1>
        <p className="text-xl text-gray-500">Let's set up your SME security posture in under 5 minutes.</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex border-b border-gray-200">
          <div className="flex-1 p-4 text-center border-b-2 border-teal-500 font-bold text-teal-600">1. Company Profile</div>
          <div className="flex-1 p-4 text-center text-gray-400 font-bold">2. Technical Stack</div>
          <div className="flex-1 p-4 text-center text-gray-400 font-bold">3. Compliance Goals</div>
        </div>
        
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="e.g. Acme Logistics" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Logistics</option>
                <option>Retail</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Employee Count</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>200+</option>
              </select>
            </div>
          </div>
          
          <div className="pt-6 flex justify-end">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-colors">
              Continue to Step 2 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
