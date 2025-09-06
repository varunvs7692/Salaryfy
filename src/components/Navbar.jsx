import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-6 flex flex-col md:flex-row justify-between items-center shadow-lg mb-6">
      <div className="font-extrabold text-2xl tracking-wide mb-2 md:mb-0">Salaryfy.io</div>
      <div className="flex flex-wrap gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-blue-200 transition-colors">Salary Breakdown</Link>
        <Link to="/tax" className="hover:text-blue-200 transition-colors">Tax Info</Link>
        <Link to="/education" className="hover:text-blue-200 transition-colors">Financial Education</Link>
        <Link to="/calculator" className="hover:text-blue-200 transition-colors">Salary Calculator</Link>
      </div>
    </nav>
  );
}
