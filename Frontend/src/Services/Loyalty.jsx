import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ShieldCheck, Search, ArrowRight, Check, Star, Fingerprint } from "lucide-react";

// 🖼️ इमेज इम्पोर्ट
// 💡 टिप: फाइल का नाम rename करके 'hero-loyalty.png' कर लेना
import loyaltyImg from "../images/ChatGPT Image Apr 9, 2026, 12_59_03 PM.png";

const Loyalty = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // यहाँ हम 'loyalty-test' वैल्यू भेज रहे हैं ताकि Contact में सिलेक्ट हो जाए
    navigate("/contact", { state: { selectedService: "loyalty-test" } });
  };

  return (
    <div className="relative pt-24 pb-20 bg-[#FFF5F7] min-h-screen overflow-hidden font-sans selection:bg-[#FF4D6D] selection:text-white">
      
      {/* ✨ SOFT PINK & PURPLE BACKGROUND ORBS */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-pink-300/40 to-purple-400/20 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/30 to-indigo-300/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔥 HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-10 mb-40">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FF4D6D] fill-[#FF4D6D]" />
              <span className="text-[11px] font-black text-[#FF4D6D] uppercase tracking-[0.2em]">truth and clarity</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-black text-[#2D2E5F] leading-[1.05] tracking-tight">
              Rebuild Your <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] via-[#A855F7] to-[#FF4D6D] bg-[length:200%_auto] animate-gradient-x">
                Paradise
              </span>
            </h1>
            
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed max-w-lg font-medium">
              शक को यक़ीन में बदलें। Our professional, 100% confidential loyalty testing gives you the <span className="text-[#333] font-bold underline decoration-pink-300 underline-offset-4">blueprint</span> for complete trust or a clean break.
            </p>

            <button 
              onClick={handleBookNow}
              className="group relative px-12 py-6 bg-[#2D2E5F] text-white text-lg font-bold rounded-3xl overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(45,46,95,0.3)] active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D6D] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-3 uppercase tracking-tighter">
                Start the Test <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>

          {/* 🖼️ HERO IMAGE - With VIP Trust Frame */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF4D6D]/10 to-[#A855F7]/10 blur-2xl rounded-[4rem]"></div>
            <div className="relative bg-white/40 backdrop-blur-sm p-4 rounded-[4rem] shadow-2xl border border-white/60 transform rotate-2 group-hover:rotate-0 transition-all duration-700">
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-inner bg-pink-50/50">
                <img 
                  src={loyaltyImg} // 👈 यहाँ आपकी इमेज का वेरिएबल है
                  alt="Professional Loyalty Test" 
                  className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Badge (Animated Fingerprint for Trust) */}
              <div className="absolute -bottom-10 -right-6 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-pink-50 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF4D6D]/10 rounded-2xl flex items-center justify-center">
                    <Fingerprint className="w-6 h-6 text-[#FF4D6D]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Confidential Audit</p>
                    <p className="text-xl font-black text-[#2D2E5F]">100% Secured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 💰 PRICING SECTION - ₹11,999 Audit Plan */}
        <div className="mb-40 relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-[#2D2E5F] tracking-tighter">
              One Step to <span className="text-[#FF4D6D]">Paradise</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#FF4D6D] to-[#A855F7] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF4D6D] to-[#A855F7] rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-30"></div>
            
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-[3.5rem] p-12 md:p-16 border border-white shadow-2xl text-center">
              <h3 className="text-3xl font-black text-[#2D2E5F] mb-4">The VIP Transformation</h3>
              <p className="text-gray-400 font-bold mb-10 tracking-[0.2em] uppercase text-xs italic">A Holistic Concierge Experience</p>
              
              <div className="mb-12 relative inline-block">
                <div className="absolute -top-4 -right-8 bg-[#FF4D6D] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Value</div>
                <span className="text-7xl font-black text-[#2D2E5F] tracking-tighter">₹11,999</span>
                <span className="text-gray-400 font-bold text-xl block mt-2 tracking-widest uppercase text-xs">Per Full-Scope Audit</span>
              </div>

              <div className="grid grid-cols-1 gap-5 mb-14 text-left px-4">
                {[
                  "Complete Social Media Analysis",
                  "Cross-Platform Activity Audit",
                  "Deep-Dive Emotional Clarity Session",
                  "Full Confidentiality Protocols",
                  "Detailed Professional Report (PDF)"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center group-hover/item:bg-[#FF4D6D] transition-colors">
                      <Check className="w-4 h-4 text-[#FF4D6D] group-hover/item:text-white" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm group-hover/item:text-[#2D2E5F] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleBookNow}
                className="w-full py-6 bg-gradient-to-r from-[#2D2E5F] to-[#1A1B3B] text-white font-black rounded-[2rem] hover:shadow-2xl transition-all uppercase tracking-widest text-sm"
              >
                Secure Your Spot Now
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 FEATURES GRID - Minimum Minimalism */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: "Psychological Edge", 
              desc: "Decode partner behavior using modern cognitive science.",
              icon: <Star className="w-7 h-7" />,
              gradient: "from-amber-400 to-orange-500"
            },
            { 
              title: "Total Discretion", 
              desc: "Your identity and journey remain strictly confidential.",
              icon: <Search className="w-7 h-7" />,
              gradient: "from-purple-500 to-indigo-600"
            },
            { 
              title: "Instant Clarity", 
              desc: "Immediate breakthrough techniques for urgent conflicts.",
              icon: <Sparkles className="w-7 h-7" />,
              gradient: "from-[#FF4D6D] to-[#E63958]"
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white p-12 rounded-[3rem] border border-pink-50/50 hover:bg-[#2D2E5F] transition-all duration-500 shadow-xl">
              <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#2D2E5F] group-hover:text-white mb-4 transition-colors">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% auto;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}} />
    </div>
  );
};

export default Loyalty;