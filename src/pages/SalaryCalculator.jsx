import React, { useState } from "react";


export default function SalaryCalculator() {
  const [basic, setBasic] = useState(0);
  const [hra, setHra] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [gross, setGross] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateGross = (e) => {
    e.preventDefault();
    setGross(Number(basic) + Number(hra) + Number(allowances));
    setShowResult(true);
  };

  return (
    <div className="glass-card flex flex-col items-center shadow-2xl p-8 max-w-lg mx-auto animate-fade-in relative overflow-visible">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full shadow-lg w-20 h-20 flex items-center justify-center animate-bounce-slow">
        <svg width="44" height="44" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="20" height="10" rx="3" fill="#fff"/>
          <rect x="8" y="14" width="12" height="4" rx="2" fill="#2563eb"/>
          <circle cx="10" cy="17" r="1" fill="#2563eb"/>
          <circle cx="18" cy="17" r="1" fill="#2563eb"/>
        </svg>
      </div>
      <h2 className="text-3xl font-extrabold mb-2 mt-10 text-blue-800 drop-shadow text-center">Salary Calculator</h2>
      <p className="text-blue-700 text-base mb-6 text-center font-medium">Quickly estimate your gross salary. Enter your details below:</p>
      <form className="w-full space-y-4" onSubmit={calculateGross} autoComplete="off">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 text-blue-700 font-semibold">Basic (₹)</label>
            <input type="number" className="w-full border-2 border-blue-100 rounded-lg px-3 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white/80" value={basic} onChange={e => setBasic(e.target.value)} required min="0" />
          </div>
          <div>
            <label className="block mb-1 text-blue-700 font-semibold">HRA (₹)</label>
            <input type="number" className="w-full border-2 border-blue-100 rounded-lg px-3 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white/80" value={hra} onChange={e => setHra(e.target.value)} required min="0" />
          </div>
          <div>
            <label className="block mb-1 text-blue-700 font-semibold">Allowances (₹)</label>
            <input type="number" className="w-full border-2 border-blue-100 rounded-lg px-3 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white/80" value={allowances} onChange={e => setAllowances(e.target.value)} required min="0" />
          </div>
        </div>
        <button type="submit" className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200">Calculate Gross Salary</button>
      </form>
      {showResult && (
        <div className="mt-8 flex flex-col items-center animate-fade-in-slow w-full">
          <div className="text-2xl font-bold text-green-700 drop-shadow mb-2">Gross Salary</div>
          <div className="text-3xl font-extrabold text-green-900 bg-green-50 rounded-xl px-8 py-4 shadow-lg border border-green-200 animate-grow-in">₹{gross.toLocaleString()}</div>
          <div className="mt-4 text-blue-700 text-sm font-medium bg-blue-50 rounded-lg px-4 py-2 shadow-sm border border-blue-100 max-w-xs">Tip: Review your salary structure to optimize tax savings and benefits.</div>
        </div>
      )}
    </div>
  );
}

