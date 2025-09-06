import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-white/80 via-blue-50 to-white/70 backdrop-blur-2xl shadow-2xl border-b-2 border-blue-200 text-blue-900 px-4 sm:px-8 py-6 flex flex-col items-center rounded-b-3xl mb-10 transition-all duration-300 sticky top-0 z-30">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        
        {/* Brand & Logo */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-center gap-4 mb-4"></div>
            

            {/* Brand Name */}
            <div className="navbar-brand">
              <h1 className="navbar-brand-title">
                Salaryfy
              </h1>
            </div>

          {/* Decorative Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-3 opacity-80 animate-grow-in"></div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center w-full gap-4 mt-2">
          <nav className="main-nav-bar animate-fade-in delay-200" aria-label="Main Navigation">
            <NavLinkItem to="/" label="Salary Breakdown" />
            <NavLinkItem to="/tax" label="Tax Info" />
            <NavLinkItem to="/education" label="Financial Education" />
            <NavLinkItem to="/calculator" label="Salary Calculator" />
          </nav>
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
      <span className="group-hover:underline group-focus:underline transition-all font-medium tracking-wide">
        {label}
      </span>
    </Link>
  );
}
