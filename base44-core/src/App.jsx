import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Checklist from './pages/Checklist';
import WeeklyBrief from './pages/WeeklyBrief';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <div className="p-4 text-2xl font-bold border-b border-gray-800">ZeroT Core</div>
          <nav className="flex-1 p-4 space-y-2">
            <Link to="/" className="block p-3 rounded hover:bg-gray-800 transition">Dashboard</Link>
            <Link to="/reports" className="block p-3 rounded hover:bg-gray-800 transition">Incident Reports</Link>
            <Link to="/checklist" className="block p-3 rounded hover:bg-gray-800 transition">Response Tasks</Link>
            <Link to="/brief" className="block p-3 rounded hover:bg-gray-800 transition">Weekly Brief</Link>
          </nav>
        </aside>
        <main className="flex-1 p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/brief" element={<WeeklyBrief />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
