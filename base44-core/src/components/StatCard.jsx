import React from 'react';

const StatCard = ({ label, value, color = 'teal', trend, change }) => {
  const colorMap = {
    teal: 'text-teal-600 bg-teal-50',
    amber: 'text-amber-600 bg-amber-50',
    blue: 'text-blue-600 bg-blue-50',
    red: 'text-red-600 bg-red-50',
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 float-shadow transition-all hover:border-teal-200">
      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{label}</div>
      <div className={`text-4xl font-black ${colorMap[color].split(' ')[0]} mt-2`}>{value}</div>
      {change && (
        <div className="mt-4 flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
            {trend === 'up' ? '↑' : '↓'} {change}
          </span>
          <span className="text-xs text-slate-400">vs last period</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
