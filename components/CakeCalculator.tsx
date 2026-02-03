import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CakeCalculatorProps {
    onOpenBooking: () => void;
}

const CakeCalculator: React.FC<CakeCalculatorProps> = ({ onOpenBooking }) => {
    const [guests, setGuests] = useState(50);
    const [occasion, setOccasion] = useState('Couture Wedding');

    // Determine size category based on guest count
    const getSizeCategory = (count: number) => {
        if (count <= 40) return 'small';
        if (count <= 100) return 'medium';
        return 'large';
    };

    const size = getSizeCategory(guests);

    const content = {
        small: {
            title: 'Intimate Vintage Heart',
            desc: 'Perfect for elopements or intimate gatherings. A single tier, heart-shaped vintage piped cake that serves up to 40 guests with elegance.',
            img: '/assets/calc-small.png'
        },
        medium: {
            title: 'Avant-Garde Texture',
            desc: 'A statement piece for a modern celebration. This 2-tier design features deckled edges and gold leaf accents, serving up to 100 guests.',
            img: '/assets/calc-medium.png'
        },
        large: {
            title: 'Grand Luxury Tiered',
            desc: 'The ultimate centerpiece for a grand reception. A 4-tier masterpiece with heavy piping and satin ribbons, serving 100-200+ guests.',
            img: '/assets/calc-large.png'
        }
    };

    const currentContent = content[size];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Controls Side */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div>
                            <p className="text-[#C5A059] uppercase tracking-widest text-xs mb-4">Concierge Tool</p>
                            <h2 className="text-5xl serif text-[#7E4950] mb-6">Bespoke Calculator</h2>
                            <p className="text-[#7E4950]/70 font-light text-lg">
                                Visualize your perfect centerpiece based on your guest list and occasion style.
                            </p>
                        </div>

                        {/* Slider */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-[#7E4950] serif text-2xl">Guest Count</label>
                                <span className="text-4xl text-[#C5A059] font-light">{guests}</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="200"
                                value={guests}
                                onChange={(e) => setGuests(parseInt(e.target.value))}
                                className="w-full h-1 bg-[#7E4950]/10 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
                            />
                            <div className="flex justify-between text-xs text-[#7E4950]/40 uppercase tracking-widest">
                                <span>Intimate (10)</span>
                                <span>Grand (200+)</span>
                            </div>
                        </div>

                        {/* Dropdown */}
                        <div className="space-y-4">
                            <label className="text-[#7E4950] serif text-2xl block">Occasion Style</label>
                            <div className="relative">
                                <select
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    className="w-full p-6 text-xl bg-[#Fdfbf7] border border-[#C5A059]/30 rounded-xl text-[#7E4950] appearance-none focus:outline-none focus:border-[#C5A059]"
                                >
                                    <option>Intimate Elopement</option>
                                    <option>Couture Wedding</option>
                                    <option>Artistic Celebration</option>
                                </select>
                                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C5A059] pointer-events-none" />
                            </div>
                        </div>

                        {/* Result Text */}
                        <div className="p-8 border border-[#C5A059] rounded-xl relative mt-8">
                            <div className="absolute -top-3 left-8 bg-white px-4 text-[#C5A059] uppercase text-xs tracking-widest">Recommendation</div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={size}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <h3 className="text-2xl serif text-[#7E4950] mb-2">{currentContent.title}</h3>
                                    <p className="text-[#7E4950]/60 leading-relaxed text-sm">
                                        {currentContent.desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={onOpenBooking}
                            className="w-full bg-[#7E4950] text-[#F2BBC2] py-5 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#5a3439] transition-colors"
                        >
                            Check Availability for My Date
                        </button>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={size}
                                    src={currentContent.img}
                                    alt={currentContent.title}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Dynamic Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                                <p className="text-white/80 uppercase tracking-widest text-xs mb-2">Estimated Tier Config</p>
                                <p className="text-white text-3xl serif">{size === 'small' ? 'Single Tier' : size === 'medium' ? 'Two Tier' : 'Four Tier'}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CakeCalculator;
