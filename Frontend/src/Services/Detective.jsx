import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Search, ArrowRight, Check, ShieldCheck, Fingerprint } from "lucide-react";


import detectiveImg from "../images/ChatGPT Image Apr 9, 2026, 01_11_06 PM.png";

const Detective = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // यहाँ हम 'personal-detective' वैल्यू भेज रहे हैं ताकि Contact में सिलेक्ट हो जाए
    navigate("/contact", { state: { selectedService: "detective" } });
  };

  return (
    <div className="relative pt-24 pb-20 bg-[#0F172A] min-h-screen overflow-hidden font-sans selection:bg-[#FFD700] selection:text-black text-white">
      
      {/* ✨ MYSTERIOUS DARK & GOLD BACKGROUND ORBS */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-yellow-600/10 to-indigo-900/20 rounded-full blur-[160px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-rose-900/20 to-indigo-600/10 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔥 HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-10 mb-40">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-500/10 to-pink-500/10 border border-yellow-500/30 rounded-full backdrop-blur-md">
              <Search className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[10px] font-black text-yellow-300 uppercase tracking-[0.3em]">Confidential Investigations</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-white relative">
              Your Own <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#A855F7] to-[#FF4D6D] animate-gradient-x">
                Private <br /> Eye
              </span>
              <div className="absolute top-0 right-0 p-8">
                <Search className="w-12 h-12 text-yellow-100 -rotate-12 opacity-10" />
              </div>
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-lg font-medium">
              शक से परे, हकीकत के करीब। We give you the <span className="text-white font-bold underline decoration-yellow-400 underline-offset-4">blueprint</span> to get undeniable proof or a clean slate with 100% discretion.
            </p>

            <button 
              onClick={handleBookNow}
              className="group relative px-12 py-6 bg-white text-black text-lg font-black rounded-3xl overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF4D6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-3 uppercase tracking-tighter">
                Deploy Detective <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>

          {/* 🖼️ MYSTERIOUS IMAGE SECTION (With the Spy Image) */}
          <div className="relative group animate-in zoom-in duration-1000">
            {/* Background Glow Around Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#FF4D6D] rounded-[4rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            {/* Glass Frame */}
            <div className="relative bg-[#1E293B] p-3 rounded-[4rem] border border-white/10 shadow-2xl transition-all group-hover:bg-[#1A1B3B] group-hover:rotate-0 rotate-2">
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-inner grayscale-[50%] group-hover:grayscale-0 transition duration-700 bg-black/50">
                <img 
                  src={detectiveImg} // 👈 यहाँ आपकी इमेज का वेरिएबल है
                  alt="Personal Detective Agency" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000"
                />
              </div>
              
              {/* Floating Status Badge (Spy/Audit) */}
              {/* Removed Spy icon section due to missing icon in lucide-react */}
            </div>
          </div>
        </div>

        {/* 💰 PRICING SECTION - ₹16,999 Concierge Investigation Plan */}
        <div className="mb-40 relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              One Step to <span className="text-[#FFD700]">Paradise</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#FFD700] to-[#FF4D6D] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-xl mx-auto relative group">
            {/* Animated Glow Around Pricing Card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700] to-[#FF4D6D] rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-30 duration-1000 transition-opacity"></div>
            
            <div className="relative bg-[#1E293B]/80 backdrop-blur-2xl rounded-[3.5rem] p-12 md:p-16 border border-white/10 shadow-[0_30px_100px_rgba(255,215,0,0.1)] text-center transition-all hover:shadow-[0_30px_100px_rgba(255,215,0,0.2)]">
              <h3 className="text-2xl font-black text-white mb-2 tracking-widest uppercase">The Full Concierge Investigation</h3>
              <p className="text-gray-400 font-bold mb-10 tracking-[0.2em] uppercase text-xs italic">Complete Trace Audit</p>
              
              <div className="mb-12 relative inline-block">
                <div className="absolute -top-4 -right-8 bg-[#FFD700] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg">Value</div>
                <span className="text-7xl font-black text-white tracking-tighter">₹16,999</span>
                <span className="text-yellow-400 font-bold block mt-2 tracking-widest uppercase text-xs">Per Full-Scope Audit</span>
              </div>

              <div className="space-y-5 mb-14 text-left px-4">
                {[
                  "Personal Background Verification",
                  "Cross-Platform Activity Audit",
                  "Deep-Dive Emotional Clarity Session",
                  "Detailed Professional Report (PDF)",
                  "Total Anonymity Protocols"
                ].map((feature, i) => (
                  <div key={i} className="feature-item group/item">
                    <div className="check-box bg-yellow-500/20 group-hover/item:bg-[#FFD700]">
                      <Check className="w-4 h-4 text-yellow-500 group-hover/item:text-black" />
                    </div>
                    <span className="feature-text text-gray-300 group-hover/item:text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleBookNow}
                className="w-full py-6 bg-white text-black font-black rounded-2xl hover:bg-[#FFD700] transition-all shadow-[0_10px_40px_rgba(255,215,0,0.1)] uppercase tracking-[0.2em] text-xs active:scale-95"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 FEATURES GRID - Minimum Minimalism */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: "Trace Audit", 
              desc: "Complete digital and physical trace analysis of your partner.",
              icon: <Fingerprint className="w-7 h-7" />,
              gradient: "from-blue-500 to-indigo-600"
            },
            { 
              title: "Spy Net Access", 
              desc: "Exclusive access to private investigator networks for data gathering.",
              icon: <ShieldCheck className="w-7 h-7" />,
              gradient: "from-yellow-400 to-orange-500"
            },
            { 
              title: "Rapid Insight", 
              desc: "Immediate breakthrough techniques for urgent relationship conflicts.",
              icon: <Sparkles className="w-7 h-7" />,
              gradient: "from-[#FF4D6D] to-[#E63958]"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 hover:border-yellow-500/50 transition-all group shadow-xl">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
          background-size: 200% auto;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .check-box {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .feature-text {
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.3s;
        }
      `}} />
    </div>
  );
};

export default Detective;