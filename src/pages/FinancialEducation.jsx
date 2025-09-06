import React from "react";

export default function FinancialEducation() {
  return (
    <div className="glass-card flex flex-col items-center relative overflow-visible animate-fade-in">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full shadow-lg w-20 h-20 flex items-center justify-center animate-bounce-slow">
        <svg width="44" height="44" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="20" height="10" rx="3" fill="#fff"/>
          <rect x="8" y="14" width="12" height="4" rx="2" fill="#a21caf"/>
          <circle cx="10" cy="17" r="1" fill="#a21caf"/>
          <circle cx="18" cy="17" r="1" fill="#a21caf"/>
        </svg>
      </div>
      <h2 className="text-4xl font-extrabold mb-3 mt-12 text-purple-700 drop-shadow text-center">Financial Education</h2>
      <p className="mb-4 text-purple-800 text-lg max-w-2xl text-center">Financial literacy is the foundation of <span className='font-semibold text-purple-900'>empowerment</span>. Salaryfy is here to help you build smart habits and make informed decisions about your money, investments, and future.</p>
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 text-purple-700 bg-purple-100/60 rounded-lg px-4 py-2 text-base font-medium shadow-sm animate-fade-in-slow">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#a21caf" fillOpacity="0.12"/><path d="M12 8v4l2.5 2.5" stroke="#a21caf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#a21caf" strokeWidth="1.5" fill="none"/></svg>
          <span>Tip: Start early, stay consistent, and review your finances regularly for long-term success.</span>
        </div>
      </div>
      {/* Summary card */}
      <div className="w-full max-w-lg mx-auto mb-8 animate-fade-in-slow">
        <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-blue-50 border border-purple-200 rounded-2xl shadow-lg px-6 py-5 flex flex-col items-center">
          <div className="text-lg font-bold text-purple-900 mb-1">Summary</div>
          <div className="text-purple-800 text-base text-center">Financial education is your best investment—keep learning and growing your wealth.</div>
        </div>
      </div>
      <ul className="list-disc pl-6 text-left w-full mt-4">
        <li>Basics of budgeting and saving</li>
        <li>Understanding investments (FD, Mutual Funds, Stocks)</li>
        <li>Retirement planning and emergency funds</li>
      </ul>
    </div>
  );
}
