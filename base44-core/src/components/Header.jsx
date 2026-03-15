import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h1>
        <p className="text-slate-500 mt-1">SME Cybersecurity Operations Center</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 bg-white rounded-full shadow-sm border border-slate-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-10 h-10 rounded-full bg-slate-200" />
          <div className="hidden md:block">
            <div className="text-sm font-bold text-slate-900">Admin User</div>
            <div className="text-xs text-slate-500">System Oversight</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
