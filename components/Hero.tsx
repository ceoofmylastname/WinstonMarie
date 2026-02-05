
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
  {
    url: 'https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/6984d8abc9efe429e53df1fd.png',
    accent: 'Couture Tiers'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/2016f34f-5815-4a6d-b676-4b5a5e3bed8f/sacred+heart.jpg',
    accent: 'Sacred Romance'
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/60baf713-32f4-459d-9d17-dd82e3ebca1d/Coquette+Bow+Styled+Shoot+Details-2.jpg',
    accent: 'Vintage Bows'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#2D1A1D]">
      {/* Dynamic Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentSlide].url}
              alt="Hero Backdrop"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D1A1D]/40 to-[#7E4950]"></div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F2BBC2]/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 60, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#7E4950]/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Main Hero Layout */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <div className="w-12 h-px bg-[#F2BBC2]/40"></div>
                <span className="text-luxury text-[10px] md:text-xs tracking-[0.4em] text-[#F2BBC2]">
                  AVANT-GARDE PATISSERIE
                </span>
              </div>

              <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] leading-[0.9] md:leading-[0.85] mb-6 md:mb-8 serif tracking-tighter">
                The Art of <br />
                <span className="script-font text-[#F2BBC2] italic block md:inline relative mt-2 md:mt-0">
                  Sweet Romance
                  <motion.svg
                    viewBox="0 0 100 20"
                    className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-6 md:h-8 text-[#F2BBC2]/20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  >
                    <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="1" />
                  </motion.svg>
                </span>
              </h1>

              <p className="max-w-lg mx-auto lg:mx-0 text-lg md:text-xl serif italic opacity-70 mb-12 leading-relaxed">
                Elevating the ordinary into the extraordinary through a fusion of
                vintage charm and modern architectural design.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="group relative px-10 py-5 bg-white text-[#7E4950] rounded-full text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                  <span className="relative z-10">Start Your Legacy</span>
                  <div className="absolute inset-0 bg-[#F2BBC2] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
                <button className="text-[#F2BBC2] text-[10px] uppercase tracking-[0.3em] border-b border-[#F2BBC2]/20 pb-2 hover:border-[#F2BBC2] transition-all flex items-center group">
                  Explore Gallery
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Imagery - Creative Floating Frame */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-72 md:w-[450px] aspect-[3/4]"
            >
              {/* Modern Framing */}
              <div className="absolute -inset-4 border border-[#F2BBC2]/20 rounded-[4rem] md:rounded-[6rem] -rotate-3"></div>
              <div className="absolute -inset-4 border border-[#F2BBC2]/10 rounded-[4rem] md:rounded-[6rem] rotate-3 translate-x-4"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, rotateX: 10 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: -10 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full rounded-[4rem] md:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-8 border-[#2D1A1D] perspective-1000"
                >
                  <img
                    src={HERO_SLIDES[currentSlide].url}
                    alt="Signature Cake"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-10 right-10 glass-card px-4 py-2 rounded-full text-[10px] uppercase tracking-widest text-white">
                    {HERO_SLIDES[currentSlide].accent}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Cherry/Detail Float */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 glass-card rounded-full p-6 flex items-center justify-center text-center shadow-2xl z-20 border border-white/10"
              >
                <span className="serif italic text-[#F2BBC2] text-xs">Handcrafted Artistry</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-12 right-12 flex space-x-3">
        {HERO_SLIDES.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 transition-all duration-1000 ${currentSlide === idx ? 'w-12 bg-[#F2BBC2]' : 'w-4 bg-[#F2BBC2]/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
