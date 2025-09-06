import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SalaryBreakdown from "./pages/SalaryBreakdown";
import TaxInfo from "./pages/TaxInfo";
import FinancialEducation from "./pages/FinancialEducation";
import SalaryCalculator from "./pages/SalaryCalculator";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<SalaryBreakdown />} />
            <Route path="/tax" element={<TaxInfo />} />
            <Route path="/education" element={<FinancialEducation />} />
            <Route path="/calculator" element={<SalaryCalculator />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
