// Navbar.tsx
import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styles
import burger from "../../public/BURGER.svg";
import logo from "../../public/logo1.png";
import closeBug from "../../public/close.svg";
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#000327] p-4 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-5 items-center uppercase">
          {" "}
          <img src={logo} alt="" className="w-10 h-10" />{" "}
          <p className="text-[#eef5ff69] text-[20px]">Xellentia Hub</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`text-white focus:outline-none burger-icon ${
              isMobileMenuOpen ? "open" : ""
            }`}
          >
            <img src={burger} alt="" className="w-10 h-10" />
          </button>

          {/* Mobile Menu Container */}
          <div
            className={`mobile-menu-container z-10 bg-[#000327] ${
              isMobileMenuOpen ? "open" : ""
            }`}
          >
            {/* Close button */}
            <button
              onClick={closeMobileMenu}
              className="text-white absolute top-4 right-4 focus:outline-none"
            >
              <img src={closeBug} alt="" className="w-10 h-10" />
            </button>

            {/* Mobile Menu Links */}
            <div className="mt-20 ml-10 uppercase text-[#eef5ff69] text-[20px]">
              <a href="#" className="block  py-2">
                Home
              </a>
              <a href="#" className="block  py-2">
                About
              </a>
              <a href="#" className="block  py-2">
                Services
              </a>
              <a href="#" className="block  py-2">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
