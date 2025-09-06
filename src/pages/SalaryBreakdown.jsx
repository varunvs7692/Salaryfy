import React, { useState } from "react";
import Hero from "../components/Hero";

export default function SalaryBreakdown() {
  const [basic, setBasic] = useState(30000);
  const [hra, setHra] = useState(12000);
  const [allowances, setAllowances] = useState(8000);
  const gross = Number(basic) + Number(hra) + Number(allowances);
  return (
    <>
      <Hero />
      <section className="bg-blue-50 py-12 px-2 md:px-0">
        <div className="glass-card flex flex-col items-center relative overflow-visible animate-fade-in">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full shadow-lg w-20 h-20 flex items-center justify-center animate-bounce-slow">
            <svg width="44" height="44" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="10" width="20" height="10" rx="3" fill="#fff"/>
              <rect x="8" y="14" width="12" height="4" rx="2" fill="#2563eb"/>
              <circle cx="10" cy="17" r="1" fill="#2563eb"/>
              <circle cx="18" cy="17" r="1" fill="#2563eb"/>
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold mb-3 mt-12 text-blue-800 drop-shadow text-center">Salary Breakdown</h2>
          <div className="mb-6 max-w-2xl mx-auto text-center">
            <p className="text-xl text-blue-900 font-bold mb-2">Clarity. Transparency. Empowerment.</p>
            <p className="text-blue-700 text-lg font-medium">At <span className='font-semibold text-blue-900'>Salaryfy</span>, we break down your salary so you can make smarter financial decisions and plan your future with confidence.</p>
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="flex items-center gap-2 text-blue-600 bg-blue-100/60 rounded-lg px-4 py-2 text-base font-medium shadow-sm animate-fade-in-slow">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#2563eb" fillOpacity="0.12"/><path d="M12 8v4l2.5 2.5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#2563eb" strokeWidth="1.5" fill="none"/></svg>
              <span>Tip: Knowing your salary components helps you optimize your tax and benefits.</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 bg-green-100/60 rounded-lg px-4 py-2 text-base font-medium shadow-sm animate-fade-in-slow">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e" fillOpacity="0.12"/><path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>Insight: A higher basic salary increases your retirement benefits, but may also increase your taxable income.</span>
            </div>
          </div>
          {/* Input fields */}
          <form className="w-full max-w-xl mx-auto mb-10 animate-fade-in-slow grid grid-cols-1 md:grid-cols-3 gap-6 glass-card bg-white/60 shadow-xl border border-blue-100/60 rounded-2xl p-6" autoComplete="off" onSubmit={e => e.preventDefault()}>
            <div className="flex flex-col items-center">
              <label className="block mb-2 text-blue-800 font-bold text-lg tracking-wide">Basic (₹)</label>
              <input type="number" className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/80 shadow-sm text-lg font-semibold text-blue-900 placeholder-blue-300" value={basic} onChange={e => setBasic(e.target.value)} required min="0" placeholder="Enter Basic" />
            </div>
            <div className="flex flex-col items-center">
              <label className="block mb-2 text-blue-800 font-bold text-lg tracking-wide">HRA (₹)</label>
              <input type="number" className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/80 shadow-sm text-lg font-semibold text-blue-900 placeholder-blue-300" value={hra} onChange={e => setHra(e.target.value)} required min="0" placeholder="Enter HRA" />
            </div>
            <div className="flex flex-col items-center">
              <label className="block mb-2 text-blue-800 font-bold text-lg tracking-wide">Allowances (₹)</label>
              <input type="number" className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/80 shadow-sm text-lg font-semibold text-blue-900 placeholder-blue-300" value={allowances} onChange={e => setAllowances(e.target.value)} required min="0" placeholder="Enter Allowances" />
            </div>
          </form>
          {/* Summary card */}
          <div className="w-full max-w-lg mx-auto mb-8 animate-fade-in-slow">
            <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-green-50 border border-blue-200 rounded-2xl shadow-lg px-6 py-5 flex flex-col items-center">
              <div className="text-lg font-bold text-blue-900 mb-1">Summary</div>
              <div className="text-blue-800 text-base text-center">Your gross salary is <span className="font-semibold text-green-800">₹{gross.toLocaleString()}</span> per month.</div>
            </div>
          </div>
          <hr className="w-full border-blue-200 mb-6" />
          
        </div>
      </section>
    </>
  );
}
