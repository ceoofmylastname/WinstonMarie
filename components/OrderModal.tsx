
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CAROUSEL_IMAGES = [
    "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/6981c52b180747d607e86449.webp",
    "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/6981c53d8fbac3154b76eeb0.webp",
    "https://storage.googleapis.com/msgsndr/9m2UBN29nuaCWceOgW2Z/media/6981c5490e1466b9b9f62039.webp"
];

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

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [shape, setShape] = useState<string>('');
    const colorClass = 'text-[#7E4950]';

    // Carousel Logic
    useEffect(() => {
        if (!isOpen) return;
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isOpen]);

    // Prevent background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

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
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#2D1A1D]/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-[95vw] h-[90vh] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
                    >

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-[#7E4950] hover:bg-white/20 transition-all border border-white/20 lg:text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left Side: The Form (Scrollable) */}
                        <div
                            data-lenis-prevent
                            className="w-full lg:w-1/2 h-full overflow-y-auto overflow-x-hidden p-8 md:p-16 lg:p-20 custom-scrollbar relative bg-[#fafafa] overscroll-contain"
                        >
                            <div className="max-w-xl mx-auto">
                                <div className="mb-12">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tighter leading-none text-[#7E4950]">
                                        Start Your <br />
                                        <span className="script-font italic">Legacy</span>
                                    </h2>
                                    <p className="serif italic text-lg opacity-60 leading-relaxed">
                                        Tell us about your vision.
                                    </p>
                                </div>

                                <form className="space-y-20">
                                    {/* Simplified sections for modal flow */}

                                    {/* SECTION 1: VISIONARY */}
                                    <div className="space-y-8">
                                        <h3 className="text-xs uppercase tracking-widest text-[#7E4950]/40 border-b border-[#7E4950]/10 pb-4">01. The Visionary</h3>
                                        <div className="grid grid-cols-2 gap-8">
                                            <InputGroup label="First Name" required />
                                            <InputGroup label="Last Name" required />
                                        </div>
                                        <InputGroup label="Email" type="email" required />
                                        <InputGroup label="Phone" type="tel" required />
                                    </div>

                                    {/* SECTION 2: EVENT */}
                                    <div className="space-y-8">
                                        <h3 className="text-xs uppercase tracking-widest text-[#7E4950]/40 border-b border-[#7E4950]/10 pb-4">02. The Event</h3>
                                        <div className="grid grid-cols-2 gap-8">
                                            <InputGroup label="Date" type="date" required />
                                            <InputGroup label="Time" type="time" required />
                                        </div>
                                        <InputGroup label="Guests" type="number" required />
                                        <InputGroup label="Address" required />
                                    </div>

                                    {/* SECTION 3: ARTISTRY */}
                                    <div className="space-y-8">
                                        <h3 className="text-xs uppercase tracking-widest text-[#7E4950]/40 border-b border-[#7E4950]/10 pb-4">03. The Artistry</h3>

                                        {/* Shapes */}
                                        <div className="flex gap-4">
                                            {['Heart', 'Circle'].map((s) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => setShape(s)}
                                                    className={`flex-1 h-20 border border-[#7E4950]/10 rounded-xl flex items-center justify-center transition-all ${shape === s ? 'bg-[#7E4950] text-[#F2BBC2]' : 'hover:border-[#7E4950]/30'}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Flavor Dropdown or Radio simplified */}
                                        <div>
                                            <label className="text-luxury text-[10px] block mb-4 opacity-40 uppercase tracking-widest">Flavor Preference</label>
                                            <div className="grid grid-cols-1 gap-3">
                                                {FLAVORS.slice(0, 4).map((f, i) => (
                                                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                        <div className="w-4 h-4 rounded-full border border-[#7E4950]/30 group-hover:border-[#7E4950]"></div>
                                                        <span className="text-sm serif italic opacity-70 group-hover:opacity-100">{f.split(' with')[0]}...</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <InputGroup label="Color Palette / Shade" />
                                    </div>

                                    {/* SECTION 4: INSPIRATION */}
                                    <div className="space-y-8">
                                        <h3 className="text-xs uppercase tracking-widest text-[#7E4950]/40 border-b border-[#7E4950]/10 pb-4">04. Inspiration</h3>
                                        <div className="border border-dashed border-[#7E4950]/20 rounded-xl p-8 text-center cursor-pointer hover:bg-[#7E4950]/5 transition-colors">
                                            <span className="text-xs opacity-50">Click to upload mood board</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#7E4950] text-[#F2BBC2] py-5 rounded-xl uppercase text-xs tracking-[0.3em] font-bold hover:scale-[1.01] transition-transform">
                                        Submit Request
                                    </button>

                                    <div className="h-10"></div> {/* Bottom spacer */}
                                </form>
                            </div>
                        </div>

                        {/* Right Side: Image Carousel (Hidden on mobile) */}
                        <div className="hidden lg:block w-1/2 h-full relative bg-[#2D1A1D]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={CAROUSEL_IMAGES[currentImage]}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5 }}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                                    alt="Mood"
                                />
                            </AnimatePresence>

                            {/* Overlay Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1A1D] via-transparent to-transparent flex flex-col justify-end p-20">
                                <motion.div
                                    key={`text-${currentImage}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <h3 className="text-[#F2BBC2] text-6xl serif italic mb-4">Timeless Beauty</h3>
                                    <p className="text-white/60 max-w-sm font-light leading-relaxed">
                                        Every creation is a dialogue between memory and flavor, designed to linger long after the last bite.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default OrderModal;
