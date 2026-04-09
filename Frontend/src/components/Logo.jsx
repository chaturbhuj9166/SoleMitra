import { useState } from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to="/"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col items-start group"
    >
      <div className="flex items-center gap-2">
        
        {/* TEXT */}
        <h1 className="text-3xl font-extrabold tracking-tight 
          bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 
          text-transparent bg-clip-text
          transition duration-500 
          group-hover:scale-110
          drop-shadow-[0_10px_20px_rgba(255,0,100,0.4)]">
          SoulMitra
        </h1>

        {/* ❤️ HEART */}
        <div className="relative w-7 h-7 flex items-center justify-center">
          
          {/* Broken Heart */}
          <span
            className={`absolute text-xl transition-all duration-500 ${
              hover
                ? "opacity-0 scale-50 rotate-[-20deg]"
                : "opacity-100 scale-100"
            }`}
          >
            💔
          </span>

          {/* Full Heart */}
          <span
            className={`absolute text-xl transition-all duration-500 ${
              hover
                ? "opacity-100 scale-110 animate-pulse"
                : "opacity-0 scale-50"
            }`}
          >
            ❤️
          </span>
        </div>
      </div>

      {/* TAGLINE */}
      <p className="text-[10px] text-gray-400 tracking-[0.4em] uppercase mt-1 ml-0.5 font-medium">
      Click the logo & join the heart
      </p>
    </NavLink>
  );
};

export default Logo;