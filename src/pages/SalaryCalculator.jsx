import React, { useState } from "react";

export default function SalaryCalculator() {
  const [basic, setBasic] = useState(0);
  const [hra, setHra] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [gross, setGross] = useState(0);

  const calculateGross = (e) => {
    e.preventDefault();
    setGross(Number(basic) + Number(hra) + Number(allowances));
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Salary Calculator</h2>
      <form className="w-full" onSubmit={calculateGross}>
        <div className="mb-4">
          <label className="block mb-1">Basic Salary (₹)</label>
          <input type="number" className="w-full border rounded px-3 py-2" value={basic} onChange={e => setBasic(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1">HRA (₹)</label>
          <input type="number" className="w-full border rounded px-3 py-2" value={hra} onChange={e => setHra(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Allowances (₹)</label>
          <input type="number" className="w-full border rounded px-3 py-2" value={allowances} onChange={e => setAllowances(e.target.value)} required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate Gross Salary</button>
      </form>
      {gross > 0 && (
        <div className="mt-6 text-lg font-semibold text-green-700">
          Gross Salary: ₹{gross}
        </div>
      )}
    </div>
  );
}
