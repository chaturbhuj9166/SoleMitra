import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    "Relationship Coach",
    "Master the art of attraction",
    "Take a Loyalty Test",
    "Patchup services",
    "Hire a Personal Detective",
    "Breakup Services",
    "Do Nothing",
  ];

  const createSlug = (text) =>
    text.toLowerCase().trim().replace(/\s+/g, "-");

  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-10 py-5 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      
      {/* ❤️ LOGO */}
      <Logo />

      {/* NAV LINKS */}
      <div className="hidden lg:flex items-center space-x-7">

        {/* HOME */}
        <NavLink 
          to="/" 
          end
          onClick={handleClick}
          className={({ isActive }) =>
            `font-bold text-[14px] uppercase tracking-wider transition ${
              isActive ? "text-pink-600" : "text-gray-800 hover:text-pink-500"
            }`
          }
        >
          Home
        </NavLink>

        <span className="h-4 w-[1px] bg-gray-200"></span>

        {/* ABOUT */}
        <NavLink 
          to="/about" 
          onClick={handleClick}
          className={({ isActive }) =>
            `font-bold text-[14px] uppercase tracking-wider transition ${
              isActive ? "text-pink-600" : "text-gray-800 hover:text-pink-500"
            }`
          }
        >
          About
        </NavLink>

        <span className="h-4 w-[1px] bg-gray-200"></span>

        {/* CONTACT */}
        <NavLink 
          to="/contact" 
          onClick={handleClick}
          className={({ isActive }) =>
            `font-bold text-[14px] uppercase tracking-wider transition ${
              isActive ? "text-pink-600" : "text-gray-800 hover:text-pink-500"
            }`
          }
        >
          Contact Us
        </NavLink>

        <span className="h-4 w-[1px] bg-gray-200"></span>

        {/* SERVICES */}
        <div
          className="relative py-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="flex items-center cursor-pointer group">
            <span className={`text-[14px] uppercase tracking-wider font-bold ${
              isDropdownOpen ? "text-pink-600" : "text-gray-800"
            }`}>
              Services
            </span>
            <svg className={`w-4 h-4 ml-1 transition ${
              isDropdownOpen ? "rotate-180 text-pink-600" : "text-gray-400"
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className={`absolute top-full -left-10 pt-4 w-72 transition ${
            isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}>
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden py-2">
              {services.map((service, index) => (
                <NavLink
                  key={index}
                  to={`/${createSlug(service)}`}
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `px-6 py-4 block text-[13px] font-bold transition ${
                      isActive
                        ? "text-pink-600 bg-pink-50"
                        : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    }`
                  }
                >
                  {service}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <span className="h-4 w-[1px] bg-gray-200"></span>

        {/* BUTTON */}
        <NavLink 
          to="/book-now" 
          onClick={handleClick}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
        >
          Book Now
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;