import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll होने पर Navbar का बैकग्राउंड बदलने के लिए
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Relationship Coach",
    "Master the art of attraction",
    "Take a Loyalty Test",
    "Patchup services",
    "Hire a Personal Detective",
    "Breakup Services",
    "Do Nothing",
  ];

  const createSlug = (text) => text.toLowerCase().trim().replace(/\s+/g, "-");

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-8 md:px-16 py-4 flex items-center justify-between ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      {/* 🚀 LOGO */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
        <Logo />
      </motion.div>

      {/* 🧭 CENTER NAV */}
      <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/20 shadow-sm">
        
        <CustomNavLink to="/" label="Home" onClick={handleClick} />
        <span className="text-gray-300 mx-2">/</span>
        <CustomNavLink to="/about" label="About" onClick={handleClick} />
        <span className="text-gray-300 mx-2">/</span>
        <CustomNavLink to="/contact" label="Contact" onClick={handleClick} />
        <span className="text-gray-300 mx-2">/</span>

        {/* 🛠️ SERVICES DROPDOWN */}
        <div
          className="relative group"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className={`flex items-center gap-1 px-3 py-1 font-bold text-[13px] transition-colors ${isDropdownOpen ? "text-[#FF4D6D]" : "text-gray-600 hover:text-[#FF4D6D]"}`}>
            Services
            <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full -left-10 pt-4 w-72"
              >
                <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-100 overflow-hidden py-2">
                  {services.map((service, index) => (
                    <NavLink
                      key={index}
                      to={`/${createSlug(service)}`}
                      onClick={handleClick}
                      className="px-6 py-3.5 block text-[13px] font-bold text-gray-700 hover:bg-pink-50 hover:text-[#FF4D6D] transition-all border-l-2 border-transparent hover:border-[#FF4D6D]"
                    >
                      {service}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 💖 BOOK NOW BUTTON */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <NavLink
          to="/book-now"
          onClick={handleClick}
          className="relative overflow-hidden group bg-[#FF4D6D] text-white px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-[0.15em] shadow-lg shadow-rose-200"
        >
          <span className="relative z-10 text-white">Book Now</span>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </NavLink>
      </motion.div>

    </nav>
  );
};

// --- Custom NavLink for Hover Effects ---
const CustomNavLink = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative px-3 py-1 font-bold text-[13px] transition-all duration-300 ${
        isActive ? "text-[#FF4D6D]" : "text-gray-600 hover:text-[#FF4D6D]"
      }`
    }
  >
    {({ isActive }) => (
      <>
        {label}
        {isActive && (
          <motion.div
            layoutId="navUnderline"
            className="absolute -bottom-1 left-3 right-3 h-[2px] bg-[#FF4D6D] rounded-full"
          />
        )}
      </>
    )}
  </NavLink>
);

export default Navbar;