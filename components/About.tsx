
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="relative py-40 bg-white overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-0 text-[20vw] font-bold text-[#7E4950]/5 pointer-events-none select-none serif leading-none whitespace-nowrap">
        Winston Marie
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Creative Image Stack */}
        <div className="relative h-[500px] md:h-[700px] order-2 lg:order-1">
          <motion.div 
            initial={{ rotate: -5, scale: 0.95 }}
            whileInView={{ rotate: -8, scale: 1 }}
            className="absolute top-0 left-0 w-3/4 aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl z-0"
          >
             <img 
              src="https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/45b0b4e9-c016-4021-bd18-38893e50fba2/tempImage8y1SGw.jpg" 
              alt="Detail 1" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ rotate: 5, y: 50 }}
            whileInView={{ rotate: 12, y: 100 }}
            transition={{ duration: 1 }}
            className="absolute top-20 right-0 w-2/3 aspect-[3/4] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] z-10 border-[12px] border-white"
          >
             <img 
              src="https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/60baf713-32f4-459d-9d17-dd82e3ebca1d/Coquette+Bow+Styled+Shoot+Details-2.jpg" 
              alt="Detail 2" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-20 left-10 w-40 h-40 bg-[#7E4950] rounded-full z-20 flex items-center justify-center p-6 text-center shadow-xl border-4 border-[#F2BBC2]"
          >
            <p className="script-font text-[#F2BBC2] text-3xl leading-none">Est. 2020</p>
          </motion.div>
        </div>
        
        <div className="text-[#7E4950] order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury text-xs mb-6 block font-semibold opacity-60">The Winston Marie Story</span>
            <h2 className="text-6xl md:text-8xl mb-10 tracking-tighter leading-[0.85]">
              Curating <br /> 
              <span className="italic serif">Atmospheres</span> <br /> 
              in Sugar.
            </h2>
            <div className="w-20 h-1 bg-[#F2BBC2] mb-10"></div>
            
            <p className="text-xl serif italic font-light leading-relaxed mb-8 opacity-80">
              We specialize in custom tailored wedding and celebration cakes, known for our avant-garde approach to cake design.
            </p>
            
            <p className="text-base font-light mb-12 leading-loose opacity-70">
              Beyond the flour and sugar, we craft visions. Every cake is a sculpted masterpiece, 
              fusing the timeless elegance of vintage aesthetics with the bold, clean lines of 
              modern luxury. We don't just bake; we design the centerpiece of your memory.
            </p>
            
            <div className="flex space-x-8">
                <div className="text-center">
                    <p className="text-4xl serif text-[#7E4950] mb-1">500+</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Events Designed</p>
                </div>
                <div className="text-center border-l border-[#F2BBC2] pl-8">
                    <p className="text-4xl serif text-[#7E4950] mb-1">20+</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Signature Styles</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
