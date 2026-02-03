
import React from 'react';
import { Instagram, Facebook, Pin as Pinterest, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D1A1D] py-24 text-[#F2BBC2] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16">
        
        {/* Brand Info */}
        <div className="lg:col-span-1">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/55cd65cb-a6c4-4a7d-aa97-4a8ecb89ce70/Winston+Marie+Cakes+LogoS.png" 
            alt="Winston Marie Small Logo" 
            className="h-24 w-24 object-contain mb-8 grayscale opacity-50"
          />
          <h3 className="text-2xl serif mb-4">Winston Marie Cakes</h3>
          <p className="text-sm font-light opacity-60 leading-relaxed">
            Las Vegas' premiere bespoke bakery specializing in vintage heart cakes and couture confections.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1 flex flex-col space-y-4">
          <h4 className="text-luxury text-[10px] mb-4 opacity-40">Navigate</h4>
          <a href="#" className="text-sm hover:translate-x-2 transition-transform duration-300">Home</a>
          <a href="#" className="text-sm hover:translate-x-2 transition-transform duration-300">Vintage Gallery</a>
          <a href="#" className="text-sm hover:translate-x-2 transition-transform duration-300">Wedding Menu</a>
          <a href="#" className="text-sm hover:translate-x-2 transition-transform duration-300">Private Workshops</a>
        </div>

        {/* Subscribe */}
        <div className="lg:col-span-2">
          <h4 className="text-luxury text-[10px] mb-8 opacity-40">Newsletter</h4>
          <p className="serif italic text-lg mb-8 opacity-80">
            Join our exclusive list for news, updates and secret recipes.
          </p>
          <div className="flex border-b border-[#F2BBC2] pb-2 group">
            <input 
              type="email" 
              placeholder="yourname@email.com" 
              className="bg-transparent w-full text-white placeholder:text-white/20 focus:outline-none"
            />
            <button className="group-hover:translate-x-2 transition-transform duration-500">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex space-x-6">
          <Instagram size={20} className="hover:text-white cursor-pointer" />
          <Facebook size={20} className="hover:text-white cursor-pointer" />
          <Pinterest size={20} className="hover:text-white cursor-pointer" />
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">
            Photos by cruzvalentinphotography.com
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            &copy; {new Date().getFullYear()} Winston Marie Cakes. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
         <p className="text-[9px] uppercase tracking-[0.2em] opacity-30">
            Please be aware we are not a nut free facility. 
            Our cakes and confections may have come in contact with a variety of nuts and nut products.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
