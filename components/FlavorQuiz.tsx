import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const QUESTIONS = [
    {
        id: 1,
        question: "Pick your dream escape.",
        options: ["Parisian Balcony", "English Garden", "Amalfi Coast"]
    },
    {
        id: 2,
        question: "Choose your evening accessory.",
        options: ["Silk Ribbon", "Gold Leaf", "Pressed Florals"]
    },
    {
        id: 3,
        question: "What's your signature sip?",
        options: ["Champagne", "Espresso", "Lychee Martini"]
    }
];

const FlavorQuiz: React.FC = () => {
    const [step, setStep] = useState<'intro' | number | 'email' | 'result'>('intro');
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAnswer = (answer: string) => {
        setAnswers(prev => ({ ...prev, [step as number]: answer }));
        if ((step as number) < QUESTIONS.length) {
            setStep((step as number) + 1);
        } else {
            setStep('email');
        }
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setStep('result');
        }, 1500);
    };

    return (
        <section className="relative py-32 bg-[#Fdfbf7] overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 min-h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">

                    {/* INTRO STEP */}
                    {step === 'intro' && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059]">
                                    <Sparkles size={32} />
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-7xl serif text-[#7E4950] mb-8">Find Your <br /><span className="script-font italic">Flavor Identity</span></h2>
                            <p className="max-w-md mx-auto text-[#7E4950]/60 mb-12 leading-loose">
                                Your style is unique, and your cake should be too. Take our 3-question personality match to discover your signature Winston Marie flavor.
                            </p>
                            <button
                                onClick={() => setStep(1)}
                                className="bg-[#7E4950] text-[#F2BBC2] px-12 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:scale-105 transition-transform"
                            >
                                Start the Experience
                            </button>
                        </motion.div>
                    )}

                    {/* QUESTION STEPS */}
                    {typeof step === 'number' && (
                        <motion.div
                            key={`q-${step}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="w-full max-w-2xl"
                        >
                            <p className="text-[#C5A059] text-xs uppercase tracking-widest mb-8 text-center">Question 0{step}</p>
                            <h3 className="text-4xl md:text-5xl serif text-[#7E4950] mb-12 text-center">
                                {QUESTIONS[step - 1].question}
                            </h3>

                            <div className="space-y-4">
                                {QUESTIONS[step - 1].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option)}
                                        className="w-full p-6 text-left border border-[#7E4950]/10 rounded-xl hover:bg-[#7E4950] hover:text-[#F2BBC2] transition-all group flex items-center justify-between"
                                    >
                                        <span className="serif text-xl italic">{option}</span>
                                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* EMAIL CAPTURE */}
                    {step === 'email' && (
                        <motion.div
                            key="email"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center w-full max-w-md"
                        >
                            <h3 className="text-4xl serif text-[#7E4950] mb-4">Almost there...</h3>
                            <p className="text-[#7E4950]/60 mb-8">Enter your email to reveal your signature flavor profile.</p>

                            <form onSubmit={handleEmailSubmit} className="relative">
                                <input
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white border-b-2 border-[#7E4950]/20 py-4 px-2 text-center text-xl serif text-[#7E4950] focus:outline-none focus:border-[#7E4950] placeholder:opacity-30"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-8 bg-[#C5A059] text-white px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#b08d4b] transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Calculating...' : 'Reveal My Flavor'}
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {/* RESULT */}
                    {step === 'result' && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full flex flex-col md:flex-row items-center gap-12 bg-white p-6 rounded-[3rem] shadow-2xl"
                        >
                            <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                                <img
                                    src="/assets/lambeth-cake.png"
                                    alt="Vintage Lambeth Cake"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1A1D]/60 to-transparent flex items-end p-8">
                                    <p className="text-white script-font text-4xl">The Vintage Lambeth</p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 text-left p-4">
                                <h4 className="text-[#C5A059] uppercase tracking-widest text-xs mb-4">Your Signature Match</h4>
                                <h3 className="text-5xl serif text-[#7E4950] mb-6">Champagne & Cherries</h3>
                                <p className="text-[#7E4950]/70 leading-relaxed mb-8 font-light">
                                    You are a soul of timeless romance. Like the intricate piping of a Lambeth cake, you value detail, history, and a touch of drama. Your flavor is a delicate Champagne Sponge with Vanilla Bean syrup, paired with tart Cherry Compote and a luxurious White Chocolate Buttercream.
                                </p>
                                <div className="flex gap-4">
                                    <button onClick={() => window.location.reload()} className="text-[#7E4950] underline text-xs uppercase tracking-widest">Retake Quiz</button>
                                    <button className="bg-[#7E4950] text-[#F2BBC2] px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold">Inquire Now</button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
};

export default FlavorQuiz;
