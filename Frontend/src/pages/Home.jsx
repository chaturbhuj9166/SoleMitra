import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Heart, Search, Target, Flame, Sparkles } from "lucide-react";

// Images
import imgBreakup from "../images/ChatGPT Image Apr 9, 2026, 12_54_32 PM.png"; 
import imgDetective from "../images/ChatGPT Image Apr 9, 2026, 01_11_06 PM.png";
import imgRelRel from "../images/ChatGPT Image Apr 9, 2026, 12_32_47 PM.png";
import imgAttr from "../images/ChatGPT Image Apr 9, 2026, 12_43_28 PM.png";
import imgLoyal from "../images/ChatGPT Image Apr 9, 2026, 12_59_03 PM.png";
import imgPatchup from "../images/ChatGPT Image Apr 9, 2026, 01_05_39 PM.png";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Art of Attraction", img: imgAttr, link: "/master-the-art-of-attraction", icon: <Flame /> },
    { title: "Relationship Coach", img: imgRelRel, link: "/relationship-coach", icon: <Heart /> },
    { title: "Elite Loyalty Testing", img: imgLoyal, link: "/take-a-loyalty-test", icon: <Target /> },
    { title: "Personal Detective", img: imgDetective, link: "/hire-a-personal-detective", icon: <Search /> },
    { title: "Patchup Services", img: imgPatchup, link: "/patchup-services", icon: <Sparkles /> },
    { title: "Breakup Services", img: imgBreakup, link: "/breakup-services", icon: <Shield /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* 🔥 HERO SLIDER */}
      <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-black">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms bg-cover] ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110 pointer-events-none"
            }`}
          >

            {/* ✅ FIXED IMAGE */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-110 brightness-95 contrast-110"
            />

            {/* ✅ OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-10" />
            <div className="absolute inset-0 bg-radial-gradient z-10 opacity-30" />

            {/* CONTENT */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

              <div className="flex items-center gap-3 mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold uppercase tracking-[0.4em]">
                <span className="text-yellow-400">{slide.icon}</span>
                SoulMitra Elite
              </div>

              <h1 className="text-5xl md:text-[7rem] font-black text-white mb-8 tracking-tighter leading-none drop-shadow-lg">
                {slide.title}
              </h1>

              <button
                onClick={() => navigate(slide.link)}
                className="group px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all flex items-center gap-3 shadow-xl"
              >
                Explore Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        {/* DOTS */}
        <div className="absolute bottom-10 w-full flex justify-center gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "w-10 bg-pink-500" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 rounded-full text-white hover:bg-white hover:text-black"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 rounded-full text-white hover:bg-white hover:text-black"
        >
          <ChevronRight />
        </button>

      </section>

      {/* 💎 METRICS */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {["500+ Happy Souls", "100% Privacy", "24/7 Support", "98% Success"].map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl font-bold text-pink-500">{item.split(" ")[0]}</h3>
              <p className="text-gray-400 text-sm">{item.split(" ").slice(1).join(" ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏛️ WHY US */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Why Choose Us</h2>
          <p className="text-gray-500">We engineer results, not just advice.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Deep Investigation", d: "We find the truth.", i: <Search /> },
            { t: "Expert Coaches", d: "Best professionals.", i: <Shield /> },
            { t: "100% Privacy", d: "Your data is safe.", i: <Flame /> }
          ].map((card, i) => (
            <div key={i} className="p-10 border rounded-3xl shadow hover:shadow-xl transition">
              <div className="mb-4 text-pink-500">{card.i}</div>
              <h3 className="text-xl font-bold">{card.t}</h3>
              <p className="text-gray-500">{card.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🖤 CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
        <button
          onClick={() => navigate("/book-now")}
          className="px-10 py-4 bg-pink-500 rounded-full text-white font-bold hover:bg-white hover:text-black transition"
        >
          Book Now
        </button>
      </section>

      {/* CUSTOM CSS */}
      <style>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%);
        }
      `}</style>

    </div>
  );
};

export default Home;