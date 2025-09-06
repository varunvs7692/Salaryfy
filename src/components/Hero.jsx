import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-blue-50 to-white py-20 px-4 text-center rounded-2xl shadow-lg mb-12 mt-8 mx-2 md:mx-auto max-w-5xl border border-blue-100 animate-fade-in">
      <div className="flex flex-col items-center justify-center mb-8">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 drop-shadow-xl">
          <circle cx="60" cy="60" r="60" fill="#2563eb" fillOpacity="0.1" />
          <rect x="35" y="50" width="50" height="30" rx="6" fill="#2563eb" />
          <rect x="45" y="60" width="30" height="10" rx="2" fill="#fff" />
          <circle cx="50" cy="65" r="2" fill="#2563eb" />
          <circle cx="70" cy="65" r="2" fill="#2563eb" />
        </svg>
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">Empower Your Financial Journey</h1>
      </div>
      <p className="text-xl md:text-2xl text-blue-800 mb-10 max-w-3xl mx-auto font-medium">
        Salaryfy helps you understand your salary, taxes, and investments with clarity and confidence.<br />
        <span className="text-blue-700">Take control of your financial future today.</span>
      </p>
      <Link to="/calculator">
        <button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold px-10 py-4 rounded-xl shadow-xl transition-all duration-200 text-lg scale-100 hover:scale-105">
          Try the Salary Calculator
        </button>
      </Link>
      <div className="flex flex-col items-center mt-12">
        <span className="text-blue-400 animate-bounce">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <span className="text-blue-500 text-sm mt-2">Scroll down to learn more</span>
      </div>
    </section>
  );
}
