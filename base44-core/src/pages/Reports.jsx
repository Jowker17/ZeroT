import React from 'react';

export default function Reports() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Incident Reports</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <p className="text-gray-500 mb-4">Filterable list by status and risk level.</p>
        <div className="space-y-4">
          <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
            <div className="font-bold text-red-700">Invoice Fraud Attempt</div>
            <div className="text-sm text-red-600 mt-1">Intercepted via Email Security Gate</div>
          </div>
          <div className="p-4 border border-amber-200 bg-amber-50 rounded-lg">
            <div className="font-bold text-amber-700">Unauthorized AI Usage</div>
            <div className="text-sm text-amber-600 mt-1">Shadow IT detected on marketing subnet</div>
          </div>
          <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-700">Foreign Login Attempt</div>
            <div className="text-sm text-blue-600 mt-1">Blocked by Conditional Access Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
