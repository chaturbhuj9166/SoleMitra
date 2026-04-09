import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Heart, Coffee, ArrowRight, Check, ShieldCheck, Sun } from "lucide-react";

// 🖼️ इमेज इम्पोर्ट
// 💡 टिप: फाइल का नाम 'hero-patchup.png' रख लेना
import patchupImg from "../images/ChatGPT Image Apr 9, 2026, 01_05_39 PM.png";

const Patchup = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/contact", { state: { selectedService: "patchup-service" } });
  };

  return (
    <div className="relative pt-24 pb-20 bg-[#FFF5F7] min-h-screen overflow-hidden font-sans selection:bg-[#FF4D6D] selection:text-white">
      
      {/* ✨ SOFT HEALING BACKGROUND */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-pink-200/50 to-orange-100/30 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-rose-100/40 to-indigo-100/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔥 HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-10 mb-40">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-xl border border-white rounded-full shadow-sm">
              <Sun className="w-4 h-4 text-[#FFB347] fill-[#FFB347]" />
              <span className="text-[11px] font-black text-[#FF4D6D] uppercase tracking-[0.2em]">Second Chances</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-black text-[#2D2E5F] leading-[1.05] tracking-tight">
              The Art of <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] via-[#FFB347] to-[#FF4D6D] bg-[length:200%_auto] animate-gradient-x">
                Patchup
              </span>
            </h1>
            
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed max-w-lg font-medium">
              रिश्तों की कड़वाहट मिटाएं। Bridges aren't burnt forever. Let's create the <span className="text-[#333] font-bold underline decoration-orange-200 underline-offset-4">blueprint</span> to win them back with dignity.
            </p>

            <button 
              onClick={handleBookNow}
              className="group relative px-12 py-6 bg-[#2D2E5F] text-white text-lg font-bold rounded-3xl overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(45,46,95,0.3)] active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D6D] to-[#FFB347] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-3 uppercase tracking-tighter">
                Fix Your Relationship <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>

          {/* 🖼️ HERO IMAGE - Hugging Couple */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200/20 to-pink-200/20 blur-2xl rounded-[4rem]"></div>
            <div className="relative bg-white/60 backdrop-blur-md p-4 rounded-[4rem] shadow-2xl border border-white/80 transform -rotate-1 group-hover:rotate-0 transition-all duration-700">
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-inner bg-pink-50/50">
                <img 
                  src={patchupImg} 
                  alt="Couple Reconciliation" 
                  className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Badge (Peace/Reunion) */}
              <div className="absolute -bottom-8 -left-6 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-orange-50 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#FF4D6D] fill-[#FF4D6D]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Reunion Status</p>
                    <p className="text-xl font-black text-[#2D2E5F]">Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 💰 PRICING SECTION */}
        <div className="mb-40 relative">
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-pink-200 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40"></div>
            
            <div className="relative bg-white/90 backdrop-blur-2xl rounded-[3.5rem] p-12 md:p-16 border border-white shadow-2xl text-center">
              <h3 className="text-3xl font-black text-[#2D2E5F] mb-4 uppercase tracking-tight">The Reconciliation Plan</h3>
              <p className="text-gray-400 font-bold mb-10 tracking-[0.2em] uppercase text-[10px] italic">Bring Back the Spark</p>
              
              <div className="mb-12">
                <span className="text-7xl font-black text-[#2D2E5F] tracking-tighter">₹12,999</span>
                <span className="text-gray-400 font-bold block mt-2 tracking-widest uppercase text-xs">Per Strategy Session</span>
              </div>

              <div className="space-y-5 mb-14 text-left">
                {[
                  "Conflict De-escalation Scripts",
                  "Ego-Clash Resolution Techniques",
                  "Re-attraction Psychological Plan",
                  "Apology & Forgiveness Framework",
                  "Post-Patchup Maintenance Guide"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-600 font-semibold text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleBookNow}
                className="w-full py-6 bg-gradient-to-r from-[#2D2E5F] to-[#1A1B3B] text-white font-black rounded-3xl hover:shadow-xl transition-all uppercase tracking-widest text-xs"
              >
                Book Your Session
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: "Mediated Talk", 
              desc: "Learn how to talk through high-tension arguments calmly.",
              icon: <Coffee className="w-7 h-7" />,
              gradient: "from-orange-400 to-amber-500"
            },
            { 
              title: "Trust Building", 
              desc: "Proven steps to regain trust after a major fallout.",
              icon: <ShieldCheck className="w-7 h-7" />,
              gradient: "from-indigo-400 to-purple-600"
            },
            { 
              title: "Emotional Reset", 
              desc: "Techniques to clear old baggage and start fresh.",
              icon: <Sparkles className="w-7 h-7" />,
              gradient: "from-[#FF4D6D] to-rose-600"
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-white p-12 rounded-[3rem] border border-orange-50/50 hover:bg-[#2D2E5F] transition-all duration-500 shadow-xl">
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
          animation: bounce 4s infinite;
        }
      `}} />
    </div>
  );
};

export default Patchup;