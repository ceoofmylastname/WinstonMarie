
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
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-[#2D1A1D]/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'
      }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Social Icons - Left */}
        <div className="hidden lg:flex space-x-8 items-center flex-1">
          <a href="#" className="text-[#F2BBC2]/60 hover:text-white transition-all"><Instagram size={16} /></a>
          <a href="#" className="text-[#F2BBC2]/60 hover:text-white transition-all"><Facebook size={16} /></a>
          <a href="#" className="text-[#F2BBC2]/60 hover:text-white transition-all"><Pinterest size={16} /></a>
        </div>

        {/* Center Logo - Make it Pop */}
        <div
          className="flex flex-col items-center flex-1 cursor-pointer transition-transform duration-500 hover:scale-105"
          onClick={() => onNavClick('home')}
        >
          <div className="relative">
            <img
              src={LOGO_URL}
              alt="Winston Marie Cakes"
              className={`transition-all duration-500 ${isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-24'} object-contain drop-shadow-xl brightness-0 invert`}
            />
            {!isScrolled && (
              <div className="absolute -inset-4 bg-[#F2BBC2]/5 rounded-full blur-xl -z-10 animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center flex-1 justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center bg-[#F2BBC2]/10 rounded-full text-[#F2BBC2]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav Items - Right */}
        <div className="hidden lg:flex items-center space-x-10 flex-1 justify-end">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative group py-2 ${activeSection === item.id ? 'text-white' : 'text-[#F2BBC2]/60 hover:text-[#F2BBC2]'
                }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F2BBC2] transition-all duration-500 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#2D1A1D] z-[110] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'
        }`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white">
          <X size={32} />
        </button>

        <img src={LOGO_URL} alt="Logo" className="h-20 object-contain mb-20 opacity-30" />

        <div className="flex flex-col items-center space-y-10">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.id);
                setIsOpen(false);
              }}
              className="text-4xl md:text-6xl serif italic hover:text-[#F2BBC2] transition-colors group flex items-center"
            >
              <span className="text-[10px] font-sans mr-4 opacity-20 group-hover:opacity-100">0{idx + 1}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
