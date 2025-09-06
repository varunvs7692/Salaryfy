import React from "react";

export default function TaxInfo() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Tax Information</h2>
      <p className="mb-2">Learn about tax slabs, deductions, and how your salary is taxed in India.</p>
      <ul className="list-disc pl-6 text-left w-full mt-4">
        <li>Income Tax Slabs for FY 2025-26</li>
        <li>Section 80C, 80D, and other deductions</li>
        <li>Tax-saving investment options</li>
      </ul>
    </div>
  );
}
