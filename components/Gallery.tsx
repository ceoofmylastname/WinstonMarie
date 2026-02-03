
import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

interface GalleryProps {
  onOpenBooking?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [xRange, setXRange] = useState(0);

  // Precise measurement of the horizontal track
  const updateWidth = useCallback(() => {
    if (scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      // The distance to travel is the total content width minus the visible window
      setXRange(Math.max(0, totalWidth - viewportWidth));
    }
  }, []);

  useLayoutEffect(() => {
    updateWidth();

    // Safety check for mobile (layout often shifts after initial load)
    const timer = setTimeout(() => updateWidth(), 500);

    // Recalculate if images load late or window changes
    const resizeObserver = new ResizeObserver(() => updateWidth());
    if (scrollRef.current) resizeObserver.observe(scrollRef.current);
    window.addEventListener('resize', updateWidth);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, [updateWidth]);

  // Track scroll progress of the 600vh section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Reactive Scroll Counter
  // Map 0-100 directly to full scroll range so it always responds, even during start/end buffers
  const progressPercent = useTransform(scrollYProgress, [0, 1], [0, 100], { clamp: true });
  const roundedProgress = useTransform(progressPercent, v => Math.round(v));

  // Transformations
  // buffer: 10% start delay, 10% end delay for "docking" feel
  const x = useTransform(scrollYProgress, [0.1, 0.9], [0, -xRange]);

  // Title Animation: Fade and slide UP as images enter from the right
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], [150, -450]);

  return (
    <section
      ref={targetRef}
      className="relative h-[400vh] md:h-[600vh] bg-[#7E4950]"
    >
      {/* Sticky Frame: This container freezes vertically while the track moves horizontally */}
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-center overflow-hidden">

        {/* Cinematic Background Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.div
            style={{ x: bgTextX }}
            className="text-[28vw] font-black text-white/[0.015] serif leading-none uppercase whitespace-nowrap"
          >
            Couture • Vintage • Luxury • Couture • Vintage
          </motion.div>
        </div>

        {/* Hero Section Title: Designed to fade away before first image card arrives */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute top-24 md:top-36 left-8 md:left-24 z-50 pointer-events-none"
        >
          <span className="text-luxury text-[10px] text-[#F2BBC2] mb-4 block tracking-[0.6em] font-bold opacity-70">
            SIGNATURE SPOTLIGHT
          </span>
          <h2 className="text-7xl md:text-[10rem] lg:text-[13rem] tracking-tighter leading-[0.85] text-white drop-shadow-2xl">
            Vintage <br />
            <span className="script-font text-[#F2BBC2] text-8xl md:text-[14rem] ml-4">Spotlight</span>
          </h2>
        </motion.div>

        {/* The Horizontal Content Track */}
        <motion.div
          ref={scrollRef}
          style={{ x, willChange: 'transform' }}
          className="flex flex-nowrap gap-16 md:gap-40 items-center relative z-20 w-max"
        >
          {/* Spacer: Ensures the title is visible ALONE for the first chunk of scrolling */}
          <div className="flex-shrink-0 w-[45vw] md:w-[55vw]"></div>

          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-[85vw] md:w-[750px] lg:w-[1000px] group relative"
            >
              <div className="relative rounded-[3.5rem] md:rounded-[7rem] overflow-hidden aspect-[4/5] md:aspect-[16/10] shadow-[0_80px_150px_-40px_rgba(0,0,0,0.9)] border border-white/5 bg-[#2D1A1D]">
                <img
                  src={img.url}
                  alt={img.title}
                  onLoad={updateWidth}
                  className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110"
                />

                {/* Visual Depth Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1A1D] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-1000"></div>

                {/* Modern Vintage Frame Details */}
                <div className="absolute top-14 right-14 w-28 h-28 border-t border-r border-[#F2BBC2]/20 rounded-tr-[5rem] scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000"></div>
                <div className="absolute bottom-14 left-14 w-28 h-28 border-b border-l border-[#F2BBC2]/20 rounded-bl-[5rem] scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000"></div>

                {/* Card Info Overlay */}
                <div className="absolute inset-0 p-12 md:p-24 flex flex-col justify-end">
                  <div className="space-y-4">
                    <span className="text-luxury text-[10px] text-[#F2BBC2] tracking-[0.5em] block translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
                      COLLECTION NO — 0{idx + 1}
                    </span>
                    <h3 className="text-4xl md:text-9xl serif text-white tracking-tighter leading-none translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 delay-100">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final Transitioning Frame */}
          <div className="flex-shrink-0 w-[80vw] md:w-[100vw] h-full flex items-center justify-center px-32">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              className="text-center glass-card p-20 md:p-40 rounded-[6rem] md:rounded-[12rem] border border-white/5 shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
              <h4 className="text-5xl md:text-[10rem] serif italic text-[#F2BBC2] mb-16 leading-[0.85]">
                The Future <br /> <span className="script-font">of Heritage</span>
              </h4>
              <button
                onClick={onOpenBooking}
                className="group relative px-24 py-9 bg-white text-[#7E4950] rounded-full uppercase text-[11px] tracking-[0.5em] font-bold overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-2xl"
              >
                <span className="relative z-10">Start Your Legacy</span>
                <div className="absolute inset-0 bg-[#F2BBC2] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              </button>
            </motion.div>
          </div>

          <div className="flex-shrink-0 w-[20vw]"></div>
        </motion.div>

        {/* Progress Navigation Interface */}
        <div className="absolute bottom-12 md:bottom-24 left-8 md:left-24 right-8 md:right-24 flex items-center space-x-16 z-50">
          <div className="hidden xl:flex flex-col items-start min-w-[200px]">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#F2BBC2]/40 mb-3 font-medium">Immersive Archive</span>
            <div className="flex space-x-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.1, 1, 0.1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  className="w-1.5 h-1.5 bg-[#F2BBC2] rounded-full"
                />
              ))}
            </div>
          </div>

          <div className="flex-1 h-[1px] bg-white/10 relative rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-gradient-to-r from-[#2D1A1D] via-[#F2BBC2] to-white origin-left"
            />
          </div>

          <div className="flex items-center space-x-4 min-w-[150px] justify-end">
            <motion.span className="text-5xl md:text-7xl font-light text-[#F2BBC2] serif italic tabular-nums leading-none">
              {roundedProgress}
            </motion.span>
            <span className="text-[10px] uppercase tracking-widest text-[#F2BBC2]/40 font-bold mb-2">/ 100</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
