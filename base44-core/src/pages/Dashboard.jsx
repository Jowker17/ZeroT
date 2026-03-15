import React, { useState, useEffect } from 'react';
import { getIncidents } from '../api/base44Client';

export default function Dashboard() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    getIncidents().then(setIncidents);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Security Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="text-gray-500 text-sm font-medium">Readiness Score</div>
          <div className="text-4xl font-black text-teal-600 mt-2">72%</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="text-gray-500 text-sm font-medium">Open Reports</div>
          <div className="text-4xl font-black text-amber-600 mt-2">{incidents.length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="text-gray-500 text-sm font-medium">Pending Tasks</div>
          <div className="text-4xl font-black text-blue-600 mt-2">12</div>
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Suspicious Reports</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {incidents.map((inc) => (
              <tr key={inc.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inc.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${inc.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {inc.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
