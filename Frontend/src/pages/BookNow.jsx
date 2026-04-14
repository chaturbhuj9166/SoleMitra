import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, ShieldCheck, Lock, ExternalLink, Calendar, User } from "lucide-react";

// ✅ Background Image (Update path as per your folder structure)
import bgImage from "../images/relationshipimg.webp"; 

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 👈 Contact Page से आया डेटा (Default values if someone lands directly)
  const userData = location.state?.userData || {
    name: "Guest",
    service: "other",
    email: "Not provided"
  };

 
  const serviceRoutes = {
    "relationship-coach": "/relationship-coach",
    "attraction-art": "/master-the-art-of-attraction",
    "loyalty-test": "/take-a-loyalty-test",
    "patchup": "/patchup-services",
    "detective": "/hire-a-personal-detective",
    "breakup": "/breakup-services",
    "other": "/services"
  };

  // 💰 Dynamic Pricing Logic
  const getPrice = (service) => {
    const prices = {
      "loyalty-test": "₹11,999",
      "detective": "₹16,999",
      "relationship-coach": "₹11,000",
      "breakup": "₹14,999",
      "attraction-art": "₹9,999",
      "patchup": "₹12,999",
      "other": "₹10,299"
    };
    return prices[service] || "₹1,299";
  };

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-hidden font-sans">
      
      {/* 🖼️ ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <img 
          src={bgImage} 
          alt="bg" 
          className="w-full h-full object-cover opacity-30 filter blur-xl scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

     
     

      <section className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl bg-[#0a0a0a]/80 border border-white/10 rounded-[3rem] backdrop-blur-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] mt-20"
        > 
          {/* HEADER */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-4">
              <Lock className="w-3 h-3" />
              <span className="text-[9px] font-black uppercase tracking-widest">Secure Checkout</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Confirm <span className="text-pink-500 italic">Booking</span>
            </h2>
          </div>

          {/* 📋 INVOICE / SUMMARY CARD */}
          <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/5 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Prepared For</p>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-pink-500" />
                    <h3 className="text-xl font-bold">{userData.name}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Method</p>
                  <span className="text-[10px] font-bold text-white/60">Online Session</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white/10 mb-8"></div>

              {/* 🔗 INTERACTIVE SERVICE LINK */}
              <div className="mb-10">
                <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-3">Selected Protocol</p>
                <button 
                  onClick={() => navigate(serviceRoutes[userData.service] || "/services")} 
                  className="flex items-center gap-3 text-2xl font-black hover:text-pink-400 transition-all group text-left leading-none"
                >
                  <span className="border-b-2 border-transparent group-hover:border-pink-500">
                    {userData.service.replace(/-/g, ' ').toUpperCase()}
                  </span>
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-pink-500/20 transition-all">
                    <ExternalLink className="w-4 h-4 text-pink-500" />
                  </div>
                </button>
                <p className="text-[9px] text-gray-500 mt-3 italic tracking-wide">Review service details before proceeding</p>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Instant Access</span>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Total Pay</p>
                  <h4 className="text-4xl font-black text-white">{getPrice(userData.service)}</h4>
                </div>
              </div>
            </div>
            
            {/* Background Decoration inside card */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-500/5 blur-3xl rounded-full"></div>
          </div>

          {/* 🔘 FINAL ACTION */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-2 text-green-500">
              <ShieldCheck className="w-4 h-4 shadow-sm" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Secure Transaction</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-[0_20px_40px_rgba(236,72,153,0.2)] flex items-center justify-center gap-3"
            >
              <CreditCard className="w-5 h-5" />
              Pay & Confirm Session
            </motion.button>

            <div className="flex justify-center items-center gap-4 pt-4 opacity-20">
                <div className="h-[1px] w-12 bg-white"></div>
                <span className="text-[8px] font-black uppercase tracking-[0.4em]">SoulMitra Encryption</span>
                <div className="h-[1px] w-12 bg-white"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AMBIENT GLOWS */}
      <div className="fixed -top-24 -right-24 w-96 h-96 bg-pink-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none"></div>





    </div>
  );
};

export default BookNow;