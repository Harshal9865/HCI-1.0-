import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu state for mobile view

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-gradient-to-r from-teal-500 to-emerald-400 w-full fixed top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo or Brand Name */}
                <div className="text-white text-2xl font-bold">Employee Management</div>

                {/* Hamburger Icon */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl focus:outline-none"
                    >
                        {isMenuOpen ? '×' : '☰'}
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`space-x-8 flex-1 justify-end items-center hidden lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <Link to="/dashboard" className="text-white text-lg hover:text-gray-100">
                        Dashboard
                    </Link>
                    <Link to="/about" className="text-white text-lg hover:text-gray-100">
                        About Us
                    </Link>
                    <Link to="/contact" className="text-white text-lg hover:text-gray-100">
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400`}>
                <Link to="/dashboard" className="block text-white text-lg py-2 hover:text-gray-100">
                    Dashboard
                </Link>
                <Link to="/about" className="block text-white text-lg py-2 hover:text-gray-100">
                    About Us
                </Link>
                <Link to="/contact" className="block text-white text-lg py-2 hover:text-gray-100">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
