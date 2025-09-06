import React from "react";

export default function TaxInfo() {
  return (
    <div className="glass-card flex flex-col items-center relative overflow-visible animate-fade-in">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-br from-green-500 to-green-300 rounded-full shadow-lg w-20 h-20 flex items-center justify-center animate-bounce-slow">
        <svg width="44" height="44" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="20" height="10" rx="3" fill="#fff"/>
          <rect x="8" y="14" width="12" height="4" rx="2" fill="#22c55e"/>
          <circle cx="10" cy="17" r="1" fill="#22c55e"/>
          <circle cx="18" cy="17" r="1" fill="#22c55e"/>
        </svg>
      </div>
      <h2 className="text-4xl font-extrabold mb-3 mt-12 text-green-700 drop-shadow text-center">Tax Information</h2>
      <p className="mb-4 text-green-800 text-lg max-w-2xl text-center">Understanding taxes is key to <span className='font-semibold text-green-900'>financial empowerment</span>. Salaryfy helps you navigate tax rules, deductions, and investment options with clarity and confidence.</p>
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 text-green-700 bg-green-100/60 rounded-lg px-4 py-2 text-base font-medium shadow-sm animate-fade-in-slow">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e" fillOpacity="0.12"/><path d="M12 8v4l2.5 2.5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="1.5" fill="none"/></svg>
          <span>Tip: Use all eligible deductions to reduce your taxable income and save more.</span>
        </div>
      </div>
      {/* Summary card */}
      <div className="w-full max-w-lg mx-auto mb-8 animate-fade-in-slow">
        <div className="bg-gradient-to-r from-green-100 via-green-50 to-blue-50 border border-green-200 rounded-2xl shadow-lg px-6 py-5 flex flex-col items-center">
          <div className="text-lg font-bold text-green-900 mb-1">Summary</div>
          <div className="text-green-800 text-base text-center">Maximize your savings by claiming all eligible deductions and investing in tax-saving instruments.</div>
        </div>
      </div>
      <ul className="list-disc pl-6 text-left w-full mt-4">
        <li>Income Tax Slabs for FY 2025-26</li>
        <li>Section 80C, 80D, and other deductions</li>
        <li>Tax-saving investment options</li>
      </ul>
    </div>
  );
}
