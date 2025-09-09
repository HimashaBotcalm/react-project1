import React from "react";
import { Menu, X } from "lucide-react";
























import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-[#1090CB]">
          LOGO
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 font-medium">
          <li className="text-[#1090CB] relative">
            Home
            <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-[#1090CB] text-lg font-bold">
              •
            </span>
          </li>
          <li className="hover:text-[#1090CB]">About us</li>
          <li className="hover:text-[#1090CB]">Services</li>
          <li className="hover:text-[#1090CB]">Blog</li>
          <button className="bg-[#1090CB] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Contact us
          </button>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#1090CB]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            <li className="text-[#1090CB]">Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <button className="bg-[#1090CB] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Contact us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
