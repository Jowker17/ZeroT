import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Dashboard', path: '/', icon: '📊' },
    { label: 'Incident Reports', path: '/reports', icon: '🚨' },
    { label: 'Response Tasks', path: '/checklist', icon: '✅' },
    { label: 'Weekly Brief', path: '/brief', icon: '📅' },
    { label: 'Readiness Setup', path: '/setup', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold">Z</div>
          <span className="text-xl font-bold tracking-tight">ZeroT <span className="text-teal-400">Core</span></span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              location.pathname === item.path 
                ? 'bg-teal-600 shadow-md shadow-teal-900/20' 
                : 'hover:bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 p-4 rounded-xl">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Account</div>
          <div className="text-sm font-medium">Acme Logistics SME</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
