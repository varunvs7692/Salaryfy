import React from "react";

export default function Footer({
  year = new Date().getFullYear(),
  company = "Salaryfy.io",
  links = [
    { href: "#", label: "Contact", title: "Contact us" },
    { href: "#", label: "About", title: "About us" },
    { href: "#", label: "Privacy Policy", title: "View our privacy policy" },
  ],
}) {
  return (
    <footer
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-2 px-4 w-full shadow-2xl border-t-2 border-blue-700 fixed bottom-0 left-0 z-40 animate-fade-in"
      aria-label="Site Footer"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-row items-center justify-center gap-4 text-center text-sm font-medium">
        <span className="flex items-center gap-1">
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className="inline-block align-middle"
          >
            <circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.12" />
            <rect x="6" y="10" width="12" height="6" rx="2" fill="#fff" />
            <rect x="9" y="13" width="6" height="2" rx="1" fill="#2563eb" />
            <circle cx="10" cy="14" r="1" fill="#2563eb" />
            <circle cx="14" cy="14" r="1" fill="#2563eb" />
          </svg>
          <span className="align-middle">&copy; {year} {company}</span>
        </span>
        <span className="hidden sm:inline-block text-gray-400">|</span>
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4">
            {links.map((link) => (
              <li key={link.label} className="inline">
                <a
                  href={link.href}
                  title={link.title}
                  className="hover:underline hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
