
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Pin as Pinterest } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { SectionType } from '../types';

interface NavbarProps {
  onNavClick: (id: SectionType) => void;
  activeSection: SectionType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-[100] bg-[#2D1A1D]/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* LEFT: Logo & Company Name */}
        <div
          className="flex items-center space-x-4 cursor-pointer group"
          onClick={() => onNavClick('home')}
        >
          <img
            src={LOGO_URL}
            alt="Winston Marie Cakes"
            className="h-12 md:h-16 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <h1 className="serif text-lg md:text-xl text-[#F2BBC2] leading-none whitespace-nowrap">Winston Marie</h1>
            <p className="text-[8px] md:text-[9px] text-luxury text-[#F2BBC2]/80 tracking-[0.3em] mt-1">Cakes</p>
          </div>
        </div>

        {/* RIGHT: Navigation & Menu */}
        <div className="flex items-center space-x-8">
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative group py-2 ${activeSection === item.id ? 'text-white' : 'text-[#F2BBC2]/60 hover:text-[#F2BBC2]'
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-[#F2BBC2] transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Toggle (Visible on Mobile/Tablet) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center bg-[#F2BBC2]/10 rounded-full text-[#F2BBC2] border border-[#F2BBC2]/20"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#2D1A1D] z-[90] flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'
        }`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white">
          <X size={24} />
        </button>

        <img src={LOGO_URL} alt="Logo" className="h-20 object-contain mb-12 opacity-50" />

        <div className="flex flex-col items-center space-y-8">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.id);
                setIsOpen(false);
              }}
              className="text-3xl md:text-5xl serif italic text-[#F2BBC2]/80 hover:text-[#F2BBC2] transition-colors flex items-center"
            >
              <span className="text-[10px] font-sans mr-4 opacity-30">0{idx + 1}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
