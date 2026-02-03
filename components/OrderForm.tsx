
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OrderFormProps {
  type: 'order' | 'inquiry';
}

const FLAVORS = [
  "Champagne Cake with Strawberry Coulis and White Chocolate Buttercream",
  "Vanilla Cake with Raspberry Rose Jam and Lychee Buttercream",
  "Chocolate Cake with Dulce de Leche and Espresso Buttercream",
  "Red Velvet Cake with Cookies and Cream Buttercream",
  "Almond Cake with Salted Carmel and Cinnamon Brown Sugar Buttercream",
  "Strawberry Cake with Strawberry Buttercream",
  "Vanilla Cake with Cookies and Cream Buttercream",
  "Your Choice"
];

const ADD_ONS = [
  "Cherries",
  "Glittered Cherries",
  "Sacred Heart",
  "Cherubs",
  "Satin Ribbon (Non-edible)",
  "Pearl Sprinkles"
];

const OrderForm: React.FC<OrderFormProps> = ({ type }) => {
  const isOrder = type === 'order';
  const colorClass = 'text-[#7E4950]';
  const [shape, setShape] = useState<string>('');

  // Custom Input Helper
  const InputGroup = ({ label, placeholder, type = "text", fullWidth = false, required = false }: any) => (
    <div className={`group ${fullWidth ? 'col-span-full' : ''}`}>
      <label className="text-luxury text-[10px] block mb-2 opacity-40 group-focus-within:opacity-100 transition-opacity uppercase tracking-widest">
        {label} {required && <span className="text-[#7E4950]">*</span>}
      </label>
      <input
        type={type}
        className="w-full bg-transparent border-b-2 border-[#7E4950]/10 py-3 focus:outline-none focus:border-[#7E4950] transition-colors text-lg serif italic placeholder:opacity-30"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-20"
      >
        <span className="text-luxury text-[10px] opacity-40 mb-6 block uppercase tracking-[0.3em]">
          {isOrder ? 'Booking Request' : 'Inquiry'}
        </span>
        <h2 className={`text-6xl md:text-8xl mb-8 tracking-tighter leading-none ${colorClass}`}>
          {isOrder ? 'Reserve' : 'Start'} <br />
          <span className="script-font italic">Your Legacy</span>
        </h2>
        <p className="serif italic text-xl opacity-60 leading-relaxed max-w-xl">
          Please provide the details of your vision below. We take on a limited number of commissions each month to ensure every design receives our undivided artistic attention.
        </p>
      </motion.div>

      <form className="space-y-32">

        {/* SECTION 1: THE VISIONARY */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px w-12 bg-[#7E4950]/20"></div>
            <h3 className="serif italic text-3xl text-[#7E4950]">The Visionary</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <InputGroup label="First Name" required />
            <InputGroup label="Last Name" required />
            <InputGroup label="Email" type="email" required />

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <InputGroup label="Country" placeholder="+1" />
              </div>
              <div className="col-span-2">
                <InputGroup label="Phone Number" type="tel" required />
              </div>
            </div>

            <div className="col-span-full mt-8">
              <span className="text-xs uppercase tracking-widest opacity-40 block mb-8">Delivery Address</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <InputGroup label="Address Line 1" required fullWidth />
                <InputGroup label="Address Line 2" fullWidth />
                <InputGroup label="City" required />
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="State" required />
                  <InputGroup label="Zip Code" required />
                </div>
                <InputGroup label="Country" placeholder="United States" />
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2: THE EVENT */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px w-12 bg-[#7E4950]/20"></div>
            <h3 className="serif italic text-3xl text-[#7E4950]">The Event</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <InputGroup label="Event Date" type="date" required />

            <div className="group">
              <label className="text-luxury text-[10px] block mb-2 opacity-40 uppercase tracking-widest">
                Delivery Time (Pacific Time) *
              </label>
              <input type="time" className="w-full bg-transparent border-b-2 border-[#7E4950]/10 py-3 focus:outline-none focus:border-[#7E4950] transition-colors text-lg serif italic" />
            </div>

            <InputGroup label="Estimated Serving Size" type="number" required />
          </div>
        </section>


        {/* SECTION 3: THE ARTISTRY */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px w-12 bg-[#7E4950]/20"></div>
            <h3 className="serif italic text-3xl text-[#7E4950]">The Artistry</h3>
          </div>

          <div className="space-y-16">
            {/* Shape Selection */}
            <div>
              <label className="text-luxury text-xs block mb-8 opacity-40 uppercase tracking-widest">Cake Shape *</label>
              <div className="flex space-x-8">
                {['Heart', 'Circle'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setShape(s)}
                    className={`relative w-32 h-32 border border-[#7E4950]/20 flex items-center justify-center transition-all duration-500 ${shape === s ? 'bg-[#7E4950] text-[#F2BBC2]' : 'hover:border-[#7E4950]'}`}
                    style={{ borderRadius: s === 'Heart' ? '0' : '50%' }} // Simple visual distinction
                  >
                    {s === 'Heart' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={`w-12 h-12 absolute ${shape === s ? 'text-[#F2BBC2]' : 'text-[#7E4950]/20'}`}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    )}
                    <span className={`relative z-10 serif italic text-lg ${s === 'Circle' ? '' : 'mt-16'}`}>{s}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Flavors */}
            <div>
              <label className="text-luxury text-xs block mb-6 opacity-40 uppercase tracking-widest">Cake Flavor *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FLAVORS.map((flavor, i) => (
                  <label key={i} className="flex items-start space-x-4 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-1">
                      <input type="radio" name="flavor" className="peer sr-only" />
                      <div className="w-5 h-5 border border-[#7E4950]/30 rounded-full peer-checked:border-[#7E4950] peer-checked:bg-[#7E4950] transition-all"></div>
                    </div>
                    <span className="serif text-[#7E4950]/80 group-hover:text-[#7E4950] transition-colors font-light leading-relaxed">{flavor}</span>
                  </label>
                ))}
              </div>
            </div>

            <InputGroup label="Cake Color (Shade Description)" required fullWidth />

            {/* Add Ons */}
            <div>
              <label className="text-luxury text-xs block mb-6 opacity-40 uppercase tracking-widest">Cake Add-Ons</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {ADD_ONS.map((addon, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-5 h-5 border border-[#7E4950]/30 rounded flex items-center justify-center peer-checked:bg-[#7E4950] peer-checked:border-[#7E4950] transition-all">
                      <svg className="w-3 h-3 text-[#F2BBC2] opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="serif italic text-[#7E4950]/70 group-hover:text-[#7E4950]">{addon}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INSPIRATION */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px w-12 bg-[#7E4950]/20"></div>
            <h3 className="serif italic text-3xl text-[#7E4950]">Inspo & Mood Boards</h3>
          </div>
          <div className="border border-dashed border-[#7E4950]/30 rounded-[2rem] p-12 text-center hover:bg-[#7E4950]/5 transition-colors cursor-pointer group">
            <p className="text-[#7E4950]/60 mb-4 group-hover:text-[#7E4950]">Add your color palette, mood board, invitations, etc.</p>
            <label className="inline-block px-8 py-3 bg-[#7E4950] text-[#F2BBC2] text-xs uppercase tracking-widest rounded-full cursor-pointer hover:scale-105 transition-transform">
              Choose File
              <input type="file" className="hidden" />
            </label>
            <p className="mt-4 text-[10px] opacity-40 uppercase tracking-widest">No file chosen</p>
          </div>
        </section>

        {/* SECTION 5: FINAL TOUCHES */}
        <section>
          <InputGroup label="Message / Additional Notes" fullWidth />
          <div className="mt-12">
            <InputGroup label="How did you hear of us?" required fullWidth />
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-[#7E4950] text-[#F2BBC2] py-6 rounded-full uppercase text-xs tracking-[0.4em] font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl mt-20"
        >
          Submit Request
        </button>

      </form>
    </div>
  );
};

export default OrderForm;
