

import { useTheme } from "../context/useTheme.js";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-gradient-to-br from-white/80 via-blue-50 to-white/70 backdrop-blur-2xl shadow-2xl border-b-2 border-blue-200 text-blue-900 px-4 sm:px-8 py-6 flex flex-col items-center rounded-b-3xl mb-10 transition-all duration-300 sticky top-0 z-30">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        {/* Brand & Logo */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center gap-4 font-extrabold text-4xl sm:text-5xl tracking-tight drop-shadow-lg mb-2 text-black animate-fade-in">
            <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg animate-bounce-slow">
              <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="10" width="20" height="10" rx="3" fill="#fff"/>
                <rect x="8" y="14" width="12" height="4" rx="2" fill="#2563eb"/>
                <circle cx="10" cy="17" r="1" fill="#2563eb"/>
                <circle cx="18" cy="17" r="1" fill="#2563eb"/>
              </svg>
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400">Salaryfy.io</span>
          </div>
          <div className="text-base sm:text-xl font-semibold text-blue-700 text-center mt-1 mb-2 tracking-wide animate-fade-in delay-100">Empower Your Financial Journey</div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-3 opacity-80 animate-grow-in"></div>
        </div>
        {/* Navigation Links Card + Theme Switcher */}
        <div className="flex items-center justify-center w-full gap-4 mt-2">
          <nav className="main-nav-bar animate-fade-in delay-200" aria-label="Main Navigation">
            <NavLinkItem to="/" label="Salary Breakdown" />
            <NavLinkItem to="/tax" label="Tax Info" />
            <NavLinkItem to="/education" label="Financial Education" />
            <NavLinkItem to="/calculator" label="Salary Calculator" />
          </nav>
          <button
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="ml-2 px-3 py-2 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 text-blue-900 shadow-md hover:from-blue-300 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            {theme === "dark" ? (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.07l-.71.71m16.97 0l-.71-.71M4.05 4.93l-.71-.71M21 12h-1M4 12H3" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="5" stroke="#1e293b" strokeWidth="2"/></svg>
            ) : (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function NavLinkItem({ to, label }) {
  return (
    <Link
      to={to}
      className="relative px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 hover:bg-blue-100 hover:text-blue-800 active:bg-blue-200 active:text-blue-900 group shadow-sm"
      tabIndex={0}
    >
      <span className="group-hover:underline group-focus:underline transition-all font-medium tracking-wide">{label}</span>
    </Link>
  );
}
