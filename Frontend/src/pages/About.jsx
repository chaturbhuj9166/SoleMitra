import React from "react";
import { useNavigate } from "react-router-dom";

// 🖼️ इमेज पाथ पक्का कर लेना भाई
import relationshipImg2 from "../images/relationshipimg2.png";

const About = () => {
  const navigate = useNavigate();

  // 📋 सर्विसेज डेटा
  const services = [
    { title: "Relationship Coach", value: "relationship-coach", desc: "Expert guidance for your personal connections." },
    { title: "Art of Attraction", value: "attraction-art", desc: "Learn how to attract the right person with confidence." },
    { title: "Loyalty Test", value: "loyalty-test", desc: "Find the truth and gain peace of mind." },
    { title: "Patchup Services", value: "patchup", desc: "Fix broken relationships and rebuild trust." },
    { title: "Personal Detective", value: "detective", desc: "Private investigations for your emotional safety." },
    { title: "Breakup Help", value: "breakup", desc: "Move on with clarity and emotional strength." }
  ];

  // 🗺️ Navigation Mapping (As per your App.js screenshot)
  const serviceRoutes = {
    "relationship-coach": "/relationship-coach",
    "attraction-art": "/master-the-art-of-attraction",
    "loyalty-test": "/take-a-loyalty-test",
    "patchup": "/patchup-services",
    "detective": "/hire-a-personal-detective",
    "breakup": "/breakup-services"
  };

  const handleServiceClick = (serviceValue) => {
    // अब यह सीधे सर्विस पेज पर जाएगा
    const targetPath = serviceRoutes[serviceValue] || "/services";
    navigate(targetPath);
  };

  return (
    <div className="relative pt-32 pb-20 px-6 md:px-12 bg-[#FFF0F3] text-gray-800 min-h-screen overflow-hidden">
      
      {/* ✨ SOFT BACKGROUND ORBS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-200/30 rounded-full blur-[100px] -z-10"></div>

      {/* 🔥 HERO SECTION */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <span className="text-[#FF4D6D] uppercase tracking-[0.4em] text-xs font-bold bg-white px-4 py-2 rounded-full shadow-sm">
          Since 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-[#333] mt-6">
          About <span className="text-[#FF4D6D] font-serif italic">SoulMitra</span>
        </h1>
        <p className="mt-6 text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          We help you understand relationships and emotions in a deeper way.
        </p>
      </div>

      {/* 🔥 WHO WE ARE SECTION */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-32">
        <div className="relative group">
          <div className="absolute -inset-4 border-2 border-[#FF4D6D]/10 rounded-[2.5rem] group-hover:border-[#FF4D6D]/30 transition duration-500"></div>
          <div className="relative h-[450px] bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-200/50">
             <img 
               src={relationshipImg2} 
               alt="About SoulMitra"
               className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
               onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.parentNode.innerHTML = '<div class="h-full w-full flex items-center justify-center bg-pink-50 text-[#FF4D6D] font-bold">Image Not Found</div>';
               }}
             />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#333]">Our <span className="text-[#FF4D6D]">Mission</span></h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            SoulMitra is built to solve modern relationship problems. From attraction to breakup, we guide you through every phase with confidence.
          </p>
          <div className="p-6 bg-white rounded-3xl border border-pink-50 shadow-lg">
            <h4 className="font-bold text-[#FF4D6D] mb-2">Real Guidance</h4>
            <p className="text-sm text-gray-500">Practical solutions for real-life emotional challenges.</p>
          </div>
        </div>
      </div>

      {/* 🔥 SERVICES GRID */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333]">Our Services</h2>
          <p className="text-[#FF4D6D] font-bold uppercase tracking-widest text-sm mt-2">Discover how we can help you</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service.value)}
              className="group p-8 bg-white rounded-[2.5rem] border border-pink-50 shadow-xl shadow-rose-100/20 hover:bg-[#FF4D6D] transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-[#FF4D6D] group-hover:text-white transition duration-500">
                {service.title}
              </h3>
              <p className="text-gray-500 mt-3 group-hover:text-white/90 transition duration-500 text-sm font-medium">
                {service.desc}
              </p>
              
              {/* 📖 READ MORE BUTTON (Updated) */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-[10px] font-black flex items-center tracking-[0.2em]">
                READ MORE 
                <svg className="w-5 h-5 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;