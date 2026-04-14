import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const DoNothing = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(120);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsFinished(true);
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-[#fdfaf8] flex flex-col items-center justify-center px-6 text-center">
      
      <AnimatePresence mode="wait">
        {!isActive && !isFinished ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif italic text-[#333] mb-6">
              Just sit still.
            </h1>
            <p className="text-gray-500 mb-10 leading-relaxed">
              रिश्तों की उलझनें, करियर का प्रेशर और दिन भर की भाग-दौड़... <br />
              यहाँ सब भूल जाइए। क्या आप 2 मिनट के लिए कुछ भी नहीं कर सकते?
            </p>
            <button 
              onClick={() => setIsActive(true)}
              className="px-12 py-4 border-2 border-[#FF4D6D] text-[#FF4D6D] rounded-full font-bold uppercase tracking-widest hover:bg-[#FF4D6D] hover:text-white transition-all duration-500"
            >
              Start Doing Nothing
            </button>
          </motion.div>
        ) : isActive ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-8xl md:text-9xl font-black text-gray-100 absolute z-0"
            >
              BREATHE
            </motion.div>
            
            <div className="relative z-10">
              <h2 className="text-6xl md:text-8xl font-thin text-[#FF4D6D] mb-4">
                {formatTime(timer)}
              </h2>
              <p className="text-gray-400 tracking-[5px] uppercase text-xs font-bold">
                Don't touch anything.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg"
          >
            <h2 className="text-4xl font-black text-[#333] mb-4">Feel better?</h2>
            <p className="text-gray-500 mb-8">
              अब आप शांत हैं। अब आप सही फैसले लेने के लिए तैयार हैं।
            </p>
            <button 
             onClick={() => navigate("/home")}
              className="bg-[#333] text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest shadow-xl"
            >
              Go Back to Reality
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌸 BACKGROUND DECO */}
      <div className="fixed bottom-10 left-10 text-[10px] text-gray-300 font-bold tracking-widest uppercase">
        SoulMitra Zen Zone
      </div>
    </div>
  );
};

export default DoNothing;