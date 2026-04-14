import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    { name: "Coaching", items: ["Relationship Coach", "Master the art of attraction"] },
    { name: "Investigation", items: ["Take a Loyalty Test", "Hire a Personal Detective"] },
    { name: "Recovery", items: ["Patchup services", "Breakup Services"] }
  ];

  const createSlug = (text) => text.toLowerCase().trim().replace(/\s+/g, "-");

  const closeAll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setActiveMobileSub(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 flex items-center justify-between ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        }`}
      >
        {/* 🚀 LOGO */}
        <motion.div whileHover={{ scale: 1.02 }} className="z-[110]">
          <Logo />
        </motion.div>

        {/* 🧭 DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 shadow-sm">
          <CustomNavLink to="/" label="Home" onClick={closeAll} />
          <span className="text-gray-300 mx-1 text-xs">/</span>
          <CustomNavLink to="/about" label="About" onClick={closeAll} />
          <span className="text-gray-300 mx-1 text-xs">/</span>
          <CustomNavLink to="/contact" label="Contact" onClick={closeAll} />
          <span className="text-gray-300 mx-1 text-xs">/</span>

          <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={`flex items-center gap-1 px-3 py-1 font-bold text-[12px] transition-colors ${isDropdownOpen ? "text-[#FF4D6D]" : "text-gray-600 hover:text-[#FF4D6D]"}`}>
              Services <ChevronIcon />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute top-full -left-40 pt-4 w-[480px]">
                  <div className="bg-white shadow-2xl rounded-[1.5rem] border border-gray-100 p-6 grid grid-cols-2 gap-6">
                    {serviceCategories.map((cat, i) => (
                      <div key={i} className={i === 2 ? "col-span-2 pt-3 border-t border-gray-50" : ""}>
                        <p className="text-[8px] uppercase tracking-[2px] font-black text-[#FF4D6D] mb-3">{cat.name}</p>
                        <div className="grid grid-cols-1 gap-2">
                          {cat.items.map((item, idx) => (
                            <NavLink key={idx} to={`/${createSlug(item)}`} onClick={closeAll} className="text-[13px] font-bold text-gray-700 hover:text-[#FF4D6D] transition-all">
                              {item}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 💖 RIGHT SECTION */}
        <div className="flex items-center gap-3">
          <NavLink to="/book-now" onClick={closeAll} className="hidden md:block bg-[#FF4D6D] text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-md">
            Book Now
          </NavLink>

          {/* HAMBURGER ICON */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-800">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-[2px] bg-current rounded-full" />
              <span className="w-full h-[2px] bg-current rounded-full" />
              <span className="w-full h-[2px] bg-current rounded-full" />
            </div>
          </button>
        </div>
      </nav>

    
    {/* 📱 MOBILE SIDEBAR OVERLAY */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <>
      {/* Dark Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeAll}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[104] lg:hidden"
      />

      {/* Sidebar Content - Scroll Fix Added */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 z-[105] h-screen w-[80%] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col lg:hidden"
      >
        {/* ✅ Scrollable Container inside the Sidebar */}
        <div className="flex flex-col h-full overflow-y-auto pt-6 px-6 pb-10 custom-scrollbar">
          
          {/* WRONG (CLOSE) ICON */}
          <div className="flex justify-end mb-2 flex-shrink-0">
            <button onClick={closeAll} className="p-2 text-gray-500 hover:text-[#FF4D6D]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <MobileLink to="/" label="Home" onClick={closeAll} />
            <MobileLink to="/about" label="About" onClick={closeAll} />
            <MobileLink to="/contact" label="Contact" onClick={closeAll} />

            <div className="flex flex-col border-t border-gray-100 pt-5">
              <button 
                onClick={() => setActiveMobileSub(activeMobileSub === "serv" ? null : "serv")}
                className="flex items-center justify-between text-lg font-black text-[#333]"
              >
                Services
                <motion.span animate={{ rotate: activeMobileSub === "serv" ? 180 : 0 }}>
                  <ChevronIcon />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeMobileSub === "serv" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden"
                  >
                    <div className="pl-3 pt-3 flex flex-col gap-3 border-l-2 border-rose-100 mt-2">
                      {serviceCategories.map((cat, i) => (
                        <div key={i} className="mb-2">
                          <p className="text-[8px] uppercase tracking-widest font-black text-[#FF4D6D] mb-1.5">{cat.name}</p>
                          <div className="flex flex-col gap-2.5">
                            {cat.items.map((item, idx) => (
                              <NavLink key={idx} to={`/${createSlug(item)}`} onClick={closeAll} className="text-[13px] font-bold text-gray-500">
                                {item}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <NavLink to="/book-now" onClick={closeAll} className="mt-4 bg-[#FF4D6D] text-white py-3.5 rounded-xl font-black text-center text-[10px] uppercase tracking-widest shadow-md flex-shrink-0">
              Book Appointment
            </NavLink>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
};

// --- Helpers ---
const ChevronIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline ml-1">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomNavLink = ({ to, label, onClick }) => (
  <NavLink to={to} onClick={onClick} className={({ isActive }) => `px-2 py-1 font-bold text-[12px] transition-all ${isActive ? "text-[#FF4D6D]" : "text-gray-600 hover:text-[#FF4D6D]"}`}>
    {label}
  </NavLink>
);

const MobileLink = ({ to, label, onClick }) => (
  <NavLink to={to} onClick={onClick} className={({ isActive }) => `text-lg font-black transition-all ${isActive ? "text-[#FF4D6D]" : "text-[#333]"}`}>
    {label}
  </NavLink>
);

export default Navbar;