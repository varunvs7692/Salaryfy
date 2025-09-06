import React from "react";

export default function FinancialEducation() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Financial Education</h2>
      <p className="mb-2">Empower yourself with knowledge about personal finance, investments, and savings.</p>
      <ul className="list-disc pl-6 text-left w-full mt-4">
        <li>Basics of budgeting and saving</li>
        <li>Understanding investments (FD, Mutual Funds, Stocks)</li>
        <li>Retirement planning and emergency funds</li>
      </ul>
    </div>
  );
}
