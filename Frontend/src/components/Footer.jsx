import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // ✅ Slug बनाने का फंक्शन ताकि URL सही रहे
  const createSlug = (text) => text.toLowerCase().trim().replace(/\s+/g, "-");

  const footerServices = [
    "Relationship Coach",
    "Loyalty Test",
    "Master the art of attraction",
    "Patchup services",
    "Breakup Services",
    "Hire a Personal Detective"
  ];

  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-8 px-6 md:px-20">

      {/* 🔥 TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

        {/* 🧠 BRAND */}
        <div>
          <h2 className="text-2xl font-black text-[#FF4D6D] mb-4">
            SoulMitra
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We help you fix relationships, understand emotions, and rebuild love.
            Your journey from heartbreak to healing starts here.
          </p>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-[#FF4D6D] w-fit pb-1">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-[#FF4D6D] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FF4D6D] transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF4D6D] transition-colors">Contact</Link></li>
            <li><Link to="/book-now" className="hover:text-[#FF4D6D] transition-colors">Book Now</Link></li>
          </ul>
        </div>

        {/* 🛠️ SERVICES - डायनामिक लिंक्स */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-[#FF4D6D] w-fit pb-1">Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {footerServices.map((service, index) => (
              <li key={index}>
                <button 
                  onClick={() => navigate(`/${createSlug(service)}`)}
                  className="hover:text-[#FF4D6D] transition-colors text-left"
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 📩 CONTACT */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-[#FF4D6D] w-fit pb-1">Contact</h3>
          <div className="space-y-3">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-[#FF4D6D]">📧</span> support@soulmitra.com
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-[#FF4D6D]">📞</span> +91 98765 43210
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-[#FF4D6D]">📍</span> India
            </p>
          </div>
        </div>

      </div>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* 🔻 BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-gray-500 text-xs tracking-wider">
          © 2026 SoulMitra. All rights reserved. Designed for Healing.
        </p>

        {/* 🌐 SOCIAL */}
        <div className="flex gap-6 text-xl">
          <a href="#" className="text-gray-400 hover:text-[#FF4D6D] transition-transform hover:-translate-y-1">🌐</a>
          <a href="#" className="text-gray-400 hover:text-[#FF4D6D] transition-transform hover:-translate-y-1">📸</a>
          <a href="#" className="text-gray-400 hover:text-[#FF4D6D] transition-transform hover:-translate-y-1">🐦</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;