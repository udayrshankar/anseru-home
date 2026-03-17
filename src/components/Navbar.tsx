import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Vector.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#", active: true },
    { label: "How it Works", href: "#", active: false },
    { label: "Product", href: "#", active: false },
    { label: "Features", href: "#", active: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Anseru Logo"
            className="w-24 md:w-32 h-7 object-contain"
          />
        </Link>

        {/* Desktop Navigation menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium px-4 py-2 rounded-[5px] transition ${link.active
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="bg-transparent text-gray-600 px-5 py-2 rounded-[5px] text-sm font-medium hover:text-black hover:bg-gray-100 transition cursor-pointer">
            Talk to Founders
          </button>

          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium ${link.active ? "text-black" : "text-gray-600 hover:text-black"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}