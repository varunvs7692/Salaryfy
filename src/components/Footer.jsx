import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12 text-center w-full shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0 font-semibold">© {new Date().getFullYear()} Salaryfy.io</div>
        <div className="space-x-4 text-sm">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
