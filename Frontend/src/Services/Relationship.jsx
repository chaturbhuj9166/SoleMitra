import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, ShieldCheck, ArrowRight, Star, Check, MousePointer2 } from "lucide-react";
// 💡 टिप: फाइल का नाम rename करके 'hero-love.png' कर लेना
import relationshippage from "../images/ChatGPT Image Apr 9, 2026, 12_32_47 PM.png";

const Relationship = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/contact", { state: { selectedService: "relationship-coach" } });
  };

  return (
    <div className="relative pt-24 pb-20 bg-[#FFF5F7] min-h-screen overflow-hidden font-sans selection:bg-[#FF4D6D] selection:text-white">
      
      {/* ✨ ANIMATED BACKGROUND ORBS - Moving subtly */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-pink-300/40 to-purple-400/20 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/30 to-indigo-300/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔥 HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-10 mb-40">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform hover:scale-105 transition-transform cursor-default">
              <Sparkles className="w-4 h-4 text-[#FF4D6D] animate-spin-slow" />
              <span className="text-[11px] font-black text-[#FF4D6D] uppercase tracking-[0.2em]">World Class Coaching</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-black text-[#2D2E5F] leading-[1.05] tracking-tight">
              Reclaim Your <br /> 
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] via-[#A855F7] to-[#FF4D6D] bg-[length:200%_auto] animate-gradient-x">
                  Paradise
                </span>
                <div className="absolute bottom-4 left-0 w-full h-4 bg-pink-200/40 -z-10 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed max-w-lg font-medium">
              Every heart deserves to be understood. We provide the <span className="text-[#333] font-bold underline decoration-pink-300 underline-offset-4">blueprint</span> for a love that lasts forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleBookNow}
                className="group relative px-12 py-6 bg-[#2D2E5F] text-white text-lg font-black rounded-3xl overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(45,46,95,0.3)] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D6D] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-3 uppercase tracking-tighter">
                  Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* 🖼️ HERO IMAGE - Floating with Glass Frame */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF4D6D]/10 to-[#A855F7]/10 blur-2xl rounded-[4rem]"></div>
            <div className="relative bg-white/40 backdrop-blur-sm p-5 rounded-[4rem] shadow-2xl border border-white/60 transform rotate-2 group-hover:rotate-0 transition-all duration-700">
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-inner bg-pink-50/50">
                <img 
                  src={relationshippage} 
                  alt="Relationship Coaching" 
                  className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110"
                />
              </div>
              {/* Overlay Badge */}
              <div className="absolute -bottom-10 -right-6 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-pink-50 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF4D6D]/10 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#FF4D6D]" fill="#FF4D6D" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Proven Results</p>
                    <p className="text-xl font-black text-[#2D2E5F]">10k+ Sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 💰 PRICING SECTION - Luxury Card Style */}
        <div className="mb-40 relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-[#2D2E5F] tracking-tighter">
              One Step to <span className="text-[#FF4D6D]">Forever</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#FF4D6D] to-[#A855F7] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-xl mx-auto relative group">
            {/* Animated Glow Around Card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF4D6D] to-[#A855F7] rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
            
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-[3.5rem] p-12 md:p-16 border border-white shadow-[0_30px_100px_rgba(255,77,109,0.1)] text-center transition-all hover:shadow-[0_30px_100px_rgba(255,77,109,0.2)]">
              <div className="absolute top-0 right-0 p-8">
                <MousePointer2 className="w-8 h-8 text-pink-100 -rotate-12" />
              </div>
              
              <h3 className="text-3xl font-black text-[#2D2E5F] mb-4">The VIP Transformation</h3>
              <p className="text-gray-400 font-bold mb-10 tracking-[0.2em] uppercase text-xs">Full Concierge Experience</p>
              
              <div className="mb-12 relative inline-block">
                <div className="absolute -top-4 -right-8 bg-[#FF4D6D] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Value</div>
                <span className="text-7xl font-black text-[#2D2E5F] tracking-tighter">₹11,000</span>
                <span className="text-gray-400 font-bold text-xl block mt-2 tracking-widest uppercase text-xs">Per Deep-Dive Session</span>
              </div>

              <div className="grid grid-cols-1 gap-5 mb-14 text-left">
                {[
                  "Personalized Relationship Audit",
                  "60-Minutes High-Intensity Deep-Dive",
                  "Elite Communication Frameworks",
                  "24/7 Concierge Chat Support (7 Days)",
                  "Custom Relationship Roadmap (PDF)"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-6 h-6 bg-pink-50 rounded-full flex items-center justify-center group-hover/item:bg-[#FF4D6D] transition-colors">
                      <Check className="w-4 h-4 text-[#FF4D6D] group-hover/item:text-white" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm group-hover/item:text-[#2D2E5F] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleBookNow}
                className="w-full py-6 bg-gradient-to-r from-[#2D2E5F] to-[#1A1B3B] text-white font-black rounded-[2rem] hover:shadow-2xl transition-all active:scale-95 uppercase tracking-widest text-sm"
              >
                Secure Your Spot Now
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 FEATURES GRID - Clean Minimalism */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
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
              icon: <ShieldCheck className="w-7 h-7" />,
              gradient: "from-purple-500 to-indigo-600"
            },
            { 
              title: "Instant Clarity", 
              desc: "Immediate breakthrough techniques for urgent conflicts.",
              icon: <Sparkles className="w-7 h-7" />,
              gradient: "from-[#FF4D6D] to-[#E63958]"
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white p-12 rounded-[3rem] border border-pink-50/50 hover:bg-[#2D2E5F] transition-all duration-500 shadow-xl shadow-rose-100/20">
              <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#2D2E5F] group-hover:text-white mb-4 transition-colors">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* 💡 CSS Animations Required in your Global CSS (App.css) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}} />
    </div>
  );
};

export default Relationship;