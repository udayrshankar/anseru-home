import { Link } from "react-router-dom";
import logo from "../assets/Vector.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-32 h-7 object-contain"
          />
        </Link>

        {/* Navigation menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-black hover:text-gray-600">
            How it Works
          </a>
          <a href="#" className="text-sm font-medium text-black hover:text-gray-600">
            Product
          </a>
          <a href="#" className="text-sm font-medium text-black hover:text-gray-600">
            Company
          </a>
        </div>

        {/* CTA Button */}
        <button className="bg-black text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-800 transition">
          Talk to Founders
        </button>

      </div>
    </nav>
  );
}