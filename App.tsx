
import React, { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';
import { SectionType } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleNavClick = (section: SectionType) => {
    if (section === 'order' || section === 'inquiry') {
      setIsBookingOpen(true);
      return;
    }
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBooking = () => setIsBookingOpen(true);

  return (
    <SmoothScroll>
      <div className="min-h-screen selection:bg-[#F2BBC2] selection:text-[#7E4950] bg-[#7E4950]">
        <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

        <main className="relative">
          <section id="home">
            <Hero onOpenBooking={openBooking} />
          </section>

          {/* The Vintage Spotlight section with horizontal scroll logic */}
          <div id="vintage">
            <Gallery onOpenBooking={openBooking} />
          </div>

          <section id="confections" className="py-40 bg-[#4A2B2F] overflow-hidden relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <span className="text-luxury text-[10px] text-[#F2BBC2] mb-6 block">
                    Small Bites, Big Impressions
                  </span>
                  <h2 className="text-7xl md:text-9xl mb-10 leading-none tracking-tighter">Confections</h2>
                  <p className="text-xl serif italic font-light text-[#F2BBC2]/80 leading-relaxed mb-12 max-w-lg">
                    Beyond our signature cakes, we offer a curated selection of delicate confections,
                    handcrafted to provide a moment of pure bliss.
                  </p>
                  <button onClick={openBooking} className="px-12 py-5 bg-[#F2BBC2] text-[#7E4950] rounded-full uppercase text-[10px] tracking-[0.3em] font-bold hover:scale-105 transition-all">
                    Explore the Menu
                  </button>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-2/3 h-3/4 rounded-[5rem] overflow-hidden shadow-2xl relative z-10 border border-white/10">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/a0292029-18c9-457e-a74d-fb9b849b2990/tempImagewOGUgU.jpg"
                        alt="Confection 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <About />

        </main>

        <Footer />

        <OrderModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </SmoothScroll>
  );
};

export default App;
