import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

// ✅ Image path
import imgRelRel from "../images/ChatGPT Image Apr 13, 2026, 11_44_50 AM.png";

const Home = () => {
  const navigate = useNavigate();

  // ✅ Function to create Slug
  const createSlug = (text) => text.toLowerCase().trim().replace(/\s+/g, "-");

  const services = [
    {
      title: "Relationship Coach",
      desc: "Improve your relationships and enhance mutual understanding with expert guidance.",
      icon: "🤝",
    },
    {
      title: "Loyalty Test",
      desc: "Is your partner faithful? Discover the truth through our professional methods.",
      icon: "🔍",
    },
    {
      title: "Master the art of attraction",
      desc: "Learn the psychology and skills that make you truly attractive to others.",
      icon: "✨",
    },
    {
      title: "Patchup services",
      desc: "Healing broken hearts. We help in reconciliation and bringing back lost love.",
      icon: "❤️",
    },
    {
      title: "Breakup Services",
      desc: "If a relationship is toxic, we help you move forward with dignity and strength.",
      icon: "💔",
    },
    {
      title: "Hire a Personal Detective",
      desc: "Background checks and personal investigations with 100% strict confidentiality.",
      icon: "🕵️",
    },
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* 🚀 SECTION 1: HERO SECTION */}
      <div className="relative min-h-screen overflow-hidden flex items-center">
        
        {/* 🔥 BACKGROUND ELEMENTS */}
        <div className="absolute bottom-0 right-0 w-[10%] h-[60%] bg-gradient-to-b from-pink-400 to-pink-600"></div>
        <div 
          className="absolute right-0 top-0 w-[60%] h-full bg-white z-10" 
          style={{ borderTopLeftRadius: "300px", borderBottomLeftRadius: "500px" }}
        ></div>
        <div 
          className="absolute right-0 top-0 w-[60%] h-full z-0" 
          style={{ 
            borderTopLeftRadius: "320px", 
            borderBottomLeftRadius: "520px", 
            background: "linear-gradient(to bottom, #ff4d6d, #ff2e63)", 
            transform: "translateX(10px)" 
          }}
        ></div>

        {/* 🖼️ HERO IMAGE */}
        <div className="absolute w-[100%] flex justify-center z-20 pointer-events-none hero-img">
          <img src={imgRelRel} alt="dating" className="w-[100%] object-contain" />
        </div>

        {/* ✨ CONTENT */}
        <div className="relative z-30 w-full pt-10 lg:pt-10 px-8 md:px-16 lg:px-17 h1contenct">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-[#333] leading-tight mb-6">
                From <br /> 
                <span className="text-[#FF4D6D]">Heartbreak</span> <br /> 
                to <span className="italic font-serif">Healing.</span>
              </h1>
              
              <p className="text-gray-500 mb-10 text-base md:text-lg leading-relaxed max-w-md font-medium hero-pera">
                We help you fix relationships, understand emotions, and rebuild love. 
                Whether it's a breakup, patchup, or attraction — we are with you.
              </p>

         <div className="flex flex-wrap gap-5 mb-12 btn-group hero-btns">
                <button 
                  onClick={() => navigate("/contact")} 
                  className="px-10 py-4 bg-[#FF4D6D] text-white rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-rose-200 hover:scale-105 transition active:scale-95"
                >
                  Get Started Now
                </button>
                <button 
                  onClick={() => navigate("/about")} 
                  className="px-10 py-4 border-2 border-gray-700 text-gray-800 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-gray-50 transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 📊 SECTION 2: STATS BAR */}
      <div className="bg-gray-50 py-16 px-8 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { label: "Happy Souls", val: "10k+", color: "text-[#FF4D6D]" },
            { label: "Success Rate", val: "95%", color: "text-[#333]" },
            { label: "Expert Support", val: "24/7", color: "text-[#333]" },
            { label: "100% Privacy", val: "Secure", color: "text-[#333]" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className={`text-3xl font-black ${stat.color}`}>{stat.val}</h3>
              <p className="text-[10px] uppercase tracking-[3px] font-bold text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🛠️ SECTION 3: SERVICES EXPLORER */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="text-[10px] uppercase tracking-[5px] font-black text-[#FF4D6D] mb-4">What We Do</h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#333] leading-tight">
                Our Specialized <span className="text-[#FF4D6D]">Services</span> for your Heart.
              </h3>
            </div>
            <p className="text-gray-400 font-medium max-w-xs text-sm text-left">
              We don't just give advice; we understand your emotions and show you the right path.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/${createSlug(service.title)}`)}
                className="group p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-rose-100 transition-all duration-500 cursor-pointer"
              >
                <div className="text-4xl mb-6 bg-rose-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-[#FF4D6D] group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-black text-[#333] mb-4 group-hover:text-[#FF4D6D] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#FF4D6D] flex items-center gap-2 transition-colors">
                  Read More <span>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;  

///////////////////////////////////

