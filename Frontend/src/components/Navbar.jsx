import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-gray-300">BrandApp</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center w-1/3">
            <input
              type="text"
              placeholder="Search brands or products..."
              className="w-full py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg text-white">
              Search
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/brands" className="hover:text-gray-300">Brands</Link>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </nav>

          {/* Hamburger Button for Mobile */}
          <button
            id="menu-button"
            onClick={toggleMobileMenu}
            className="block md:hidden focus:outline-none text-gray-300 hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-gray-900 text-white">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
            <Link to="/brands" className="block px-4 py-2 hover:bg-gray-700">Brands</Link>
            <Link to="/products" className="block px-4 py-2 hover:bg-gray-700">Products</Link>
            <Link to="/login" className="block px-4 py-2 hover:bg-gray-700">Login</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
