
import React from 'react';
import { motion } from 'framer-motion';

interface OrderFormProps {
  type: 'order' | 'inquiry';
}

const OrderForm: React.FC<OrderFormProps> = ({ type }) => {
  const isOrder = type === 'order';
  const colorClass = isOrder ? 'text-[#7E4950]' : 'text-[#7E4950]';
  
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        <div className="lg:w-1/3">
           <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
           >
            <span className="text-luxury text-[10px] opacity-40 mb-6 block uppercase tracking-[0.3em]">Booking Selection</span>
            <h2 className={`text-6xl md:text-8xl mb-8 tracking-tighter leading-none ${colorClass}`}>
              {isOrder ? 'Reserve' : 'Start'} <br /> 
              <span className="script-font italic">Your Date</span>
            </h2>
            <p className="serif italic text-xl opacity-60 leading-relaxed">
              {isOrder 
                ? 'Begin your journey toward a masterfully crafted celebration cake.' 
                : 'Looking for something truly one-of-a-kind? Let’s collaborate on a vision.'
              }
            </p>
            
            <div className="mt-12 p-8 rounded-[2rem] border border-[#7E4950]/10 bg-white shadow-sm italic text-sm opacity-60 leading-relaxed">
              "We take on a limited number of commissions each month to ensure every design receives our undivided artistic attention."
            </div>
           </motion.div>
        </div>

        <div className="lg:w-2/3 w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="group">
                <label className="text-luxury text-[10px] block mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-[#7E4950]/10 py-4 focus:outline-none focus:border-[#7E4950] transition-colors text-lg serif italic"
                  placeholder="The visionary's name..."
                />
              </div>
              <div className="group">
                <label className="text-luxury text-[10px] block mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-[#7E4950]/10 py-4 focus:outline-none focus:border-[#7E4950] transition-colors text-lg serif italic"
                  placeholder="For elegant correspondence..."
                />
              </div>
              <div className="group">
                <label className="text-luxury text-[10px] block mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity">Event Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b-2 border-[#7E4950]/10 py-4 focus:outline-none focus:border-[#7E4950] transition-colors text-lg serif italic"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="group flex-1 mb-10">
                <label className="text-luxury text-[10px] block mb-4 opacity-40 group-focus-within:opacity-100 transition-opacity">Creative Brief</label>
                <textarea 
                  rows={6}
                  className="w-full h-full bg-[#7E4950]/5 rounded-[2rem] p-8 focus:outline-none focus:bg-[#7E4950]/10 transition-colors text-lg serif italic resize-none"
                  placeholder="Describe your vision, inspiration, and aesthetic preferences..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#7E4950] text-[#F2BBC2] py-6 rounded-full uppercase text-[10px] tracking-[0.4em] font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
              >
                {isOrder ? 'Request Reservation' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default OrderForm;
