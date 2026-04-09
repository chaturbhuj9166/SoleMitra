import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 💡 ये नाम और App.js के Routes के Slug मैच होने चाहिए
  const services = [
    "Relationship Coach",
    "Master the art of attraction",
    "Take a Loyalty Test",
    "Patchup services",
    "Hire a Personal Detective",
    "Breakup Services",
    "Do Nothing",
  ];

  // 🛠️ Slug बनाने का मज़बूत तरीका
  const createSlug = (text) => 
    text.toLowerCase().trim().replace(/\s+/g, "-");

  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-10 py-5 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      
      {/* LOGO */}
      <div className="flex flex-col items-start group">
        <Link to="/" onClick={handleClick} className="relative">
          <h1 className="text-3xl font-bold text-black tracking-tight group-hover:text-yellow-600 transition duration-300">
            SoulMitra
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-500 group-hover:w-full transition-all duration-500"></div>
        </Link>
        <p className="text-[10px] text-gray-400 tracking-[0.4em] uppercase mt-1 ml-0.5 font-medium">
          Your Own Friendship Flower
        </p>
      </div>

      {/* NAV LINKS */}
      <div className="hidden lg:flex items-center space-x-7">
        <Link to="/" onClick={handleClick} className="text-yellow-600 font-bold text-[14px] uppercase tracking-wider hover:text-yellow-700 transition">Home</Link>
        <span className="h-4 w-[1px] bg-gray-200"></span>
        <Link to="/about" onClick={handleClick} className="text-gray-800 font-bold text-[14px] uppercase tracking-wider hover:text-yellow-500 transition">About</Link>
        <span className="h-4 w-[1px] bg-gray-200"></span>
        <Link to="/contact" onClick={handleClick} className="text-gray-800 font-bold text-[14px] uppercase tracking-wider hover:text-yellow-500 transition">Contact Us</Link>
        <span className="h-4 w-[1px] bg-gray-200"></span>

        {/* SERVICES DROPDOWN */}
        <div
          className="relative py-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="flex items-center cursor-pointer group">
            <span className={`text-[14px] uppercase tracking-wider font-bold transition duration-300 ${isDropdownOpen ? 'text-yellow-600' : 'text-gray-800'}`}>
              Services
            </span>
            <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-yellow-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className={`absolute top-full -left-10 mt-0 pt-4 w-72 transition-all duration-300 transform ${isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-50 py-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/${createSlug(service)}`}
                  onClick={handleClick}
                  className="group flex items-center px-6 py-4 text-[13px] font-bold text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-all border-b border-gray-50 last:border-0 uppercase tracking-tighter"
                >
                  <span className="w-0 h-[2px] bg-yellow-500 mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <span className="h-4 w-[1px] bg-gray-200"></span>
        <Link to="/book-now" onClick={handleClick} className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-yellow-600 transition-all">
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;