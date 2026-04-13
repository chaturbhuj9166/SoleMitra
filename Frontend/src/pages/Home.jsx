import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ इमेज पाथ सुनिश्चित कर लेना भाई
import imgRelRel from "../images/ChatGPT Image Apr 13, 2026, 11_44_50 AM.png";

const Home = () => {
  const navigate = useNavigate();

  // ✅ Slug बनाने के लिए फंक्शन (ताकि URL क्लीन रहे)
  const createSlug = (text) => text.toLowerCase().trim().replace(/\s+/g, "-");

  const services = [
    {
      title: "Relationship Coach",
      desc: "एक्सपर्ट गाइडेंस के साथ अपने रिश्तों को बेहतर बनाएँ और आपसी समझ बढ़ाएँ।",
      icon: "🤝",
    },
    {
      title: "Loyalty Test",
      desc: "क्या आपका पार्टनर वफादार है? हमारे प्रोफेशनल तरीके से सच जानें।",
      icon: "🔍",
    },
    {
      title: "Master the art of attraction",
      desc: "सीखें वो साइकोलॉजी और स्किल्स जो आपको दूसरों के लिए अट्रैक्टिव बनाती हैं।",
      icon: "✨",
    },
    {
      title: "Patchup services",
      desc: "टूटे हुए दिल जोड़ें। हम सुलह कराने और पुराने प्यार को वापस लाने में मदद करते हैं।",
      icon: "❤️",
    },
    {
      title: "Breakup Services",
      desc: "अगर रिश्ता टॉक्सिक है, तो गरिमा के साथ आगे बढ़ने में हम आपकी मदद करेंगे।",
      icon: "💔",
    },
    {
      title: "Hire a Personal Detective",
      desc: "पूरी गोपनियता के साथ बैकग्राउंड चेक और पर्सनल इन्वेस्टिगेशन।",
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
        <div className="absolute w-[100%] flex justify-center z-20 pointer-events-none">
          <img src={imgRelRel} alt="dating" className="w-[100%] object-contain" />
        </div>

        {/* ✨ CONTENT (Aligned with Logo) */}
        <div className="relative z-30 w-full pt-40 lg:pt-40 px-8 md:px-16 lg:px-17">
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
              
              <p className="text-gray-500 mb-10 text-base md:text-lg leading-relaxed max-w-md font-medium">
                We help you fix relationships, understand emotions, and rebuild love. 
                चाहे breakup हो, patchup या attraction — हम आपके साथ हैं।
              </p>

              <div className="flex flex-wrap gap-5 mb-12">
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

      {/* 🛠️ SECTION 3: SERVICES EXPLORER (Clickable Cards) */}
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
              हम सिर्फ सलाह नहीं देते, हम आपके इमोशन्स को समझते हैं और सही रास्ता दिखाते हैं।
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                // ✅ पूरे कार्ड को क्लिकेबल बनाया और नेविगेट किया
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

      {/* 🔗 FOOTER DECO */}
      <footer className="py-10 border-t border-gray-50 flex justify-center">
        <div className="flex items-center gap-4 text-[11px] font-black text-black-800">
          <span className="tracking-widest uppercase text-left">SoulMitra • 2026</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-[1px] bg-gray-100"></div>
            <div className="w-2 h-2 border-2 border-[#111] rounded-full"></div>
            <div className="w-16 h-[1px] bg-gray-100"></div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;