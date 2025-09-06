import React from "react";
import Hero from "../components/Hero";

export default function SalaryBreakdown() {
  return (
    <>
      <Hero />
      <section className="bg-blue-50 py-12 px-2 md:px-0">
        <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col items-center border border-blue-100">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Salary Breakdown</h2>
          <p className="mb-4 text-blue-700 text-lg">Understand your salary structure and components.</p>
          <hr className="w-full border-blue-200 mb-6" />
          <div className="w-full mt-2">
            <table className="min-w-full text-left text-base">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b font-semibold text-blue-900">Component</th>
                  <th className="py-2 px-4 border-b font-semibold text-blue-900">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="py-2 px-4">Basic</td>
                  <td className="py-2 px-4">30,000</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="py-2 px-4">HRA</td>
                  <td className="py-2 px-4">12,000</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="py-2 px-4">Allowances</td>
                  <td className="py-2 px-4">8,000</td>
                </tr>
                <tr className="bg-blue-100 font-bold">
                  <td className="py-2 px-4">Gross Salary</td>
                  <td className="py-2 px-4">50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
