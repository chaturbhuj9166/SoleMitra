import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // 👈 Navigate के लिए

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 Navigation Initialize किया
  
  const [selectedService, setSelectedService] = useState("");

  // 🔥 Refs ताकि इनपुट से डेटा उठा सकें (बिना कुछ हटाए)
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const otherRef = useRef();

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setSelectedService(location.state.selectedService);
    }
  }, [location.state]);

  // 🔥 यह फंक्शन डेटा के साथ अगले पेज पर ले जाएगा
  const handleContinue = (e) => {
    e.preventDefault();

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      // अगर 'Other' सिलेक्ट है तो specify वाला डेटा, नहीं तो सिलेक्टेड सर्विस
      service: selectedService === "other" ? otherRef.current.value : selectedService,
      message: messageRef.current.value,
    };

    // डेटा के साथ navigate कर रहे हैं
    navigate("/book-now", { state: { userData } });
  };

  return (
    <div className="relative pt-32 pb-20 px-6 md:px-12 bg-[#FFF0F3] text-gray-800 min-h-screen overflow-hidden">
      
      {/* ✨ SOFT FLOATING ELEMENTS */}
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-rose-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 🔥 HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#333]">
            Let's <span className="text-[#FF4D6D]">Connect</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto text-lg font-medium">
            Ready to find your perfect balance? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 📱 LEFT SIDE: APP-STYLE INFO CARD */}
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl shadow-pink-200/20">
              <h2 className="text-2xl font-bold text-[#333] mb-4">Chat with us</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether it's a loyalty test or just a heart-to-heart talk, our experts are ready.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                   <div className="w-10 h-10 bg-[#FF4D6D]/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-[#FF4D6D]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.812 4.812l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                   </div>
                   <span className="font-semibold">+91 12345 67890</span>
                </div>

                <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-pink-50">
                   <div className="w-10 h-10 bg-[#FF4D6D]/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-[#FF4D6D]" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                   </div>
                   <span className="font-semibold">help@maitripushp.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* 📝 RIGHT SIDE: CLEAN APP-STYLE FORM */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,77,109,0.1)] border border-pink-50">
            <form onSubmit={handleContinue} className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <input ref={nameRef} required type="text" placeholder="Your Name" className="w-full bg-[#FFF0F3]/30 border-2 border-transparent focus:border-[#FF4D6D]/20 focus:bg-white rounded-2xl px-6 py-4 focus:outline-none transition-all text-gray-700" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input ref={emailRef} required type="email" placeholder="hello@example.com" className="w-full bg-[#FFF0F3]/30 border-2 border-transparent focus:border-[#FF4D6D]/20 focus:bg-white rounded-2xl px-6 py-4 focus:outline-none transition-all text-gray-700" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Service Type</label>
                <div className="relative">
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#FFF0F3]/30 border-2 border-transparent focus:border-[#FF4D6D]/20 focus:bg-white rounded-2xl px-6 py-4 focus:outline-none transition-all text-gray-700 appearance-none cursor-pointer"
                  >
                    <option value="">Choose Service</option>
                    <option value="relationship-coach">Relationship Coach</option>
                    <option value="attraction-art">Master the art of attraction</option>
                    <option value="loyalty-test">Take a Loyalty Test</option>
                    <option value="patchup">Patchup services</option>
                    <option value="detective">Hire a Personal Detective</option>
                    <option value="breakup">Breakup Services</option>
                    <option value="other">Other Support</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#FF4D6D]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* 🔥 Dynamic Input: 'other' वाला पार्ट जैसा पहले था वैसा ही है */}
              {selectedService === "other" && (
                <div className="space-y-1 animate-in fade-in zoom-in duration-300">
                  <label className="text-xs font-bold text-[#FF4D6D] uppercase tracking-widest ml-1">Please Specify</label>
                  <input ref={otherRef} type="text" placeholder="Tell us more about your need..." className="w-full bg-rose-50 border-2 border-[#FF4D6D]/20 rounded-2xl px-6 py-4 outline-none focus:border-[#FF4D6D]" />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                <textarea ref={messageRef} rows="3" placeholder="How can we help?" className="w-full bg-[#FFF0F3]/30 border-2 border-transparent focus:border-[#FF4D6D]/20 focus:bg-white rounded-2xl px-6 py-4 focus:outline-none transition-all text-gray-700 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-[#FF4D6D] text-white font-bold rounded-2xl hover:bg-[#E63958] hover:shadow-xl hover:shadow-rose-200 transition-all duration-300 text-lg uppercase">
                Continue
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;