import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionType } from '../types';

const CONFECTION_IMAGES = [
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/35731976-ded8-4410-8523-05739fe31087/tempImagekZHvEr.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/7d49d4d3-c1d5-41b6-b356-bfc388bb0b45/15D114B9-0818-4980-82C8-34CFA8C205EC.JPG",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/243fd6a8-726e-4b14-97f0-fd946b7de425/tempImagexRbtvg.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/55cd65cb-a6c4-4a7d-aa97-4a8ecb89ce70/Winston+Marie+Cakes+LogoS.png",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/3d83d412-effa-4695-8667-ec590b437b8a/tempImageK6b7O9.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/a0bf6936-d1d7-4370-b722-be4d0a024718/tempImage0CYnvL.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/7db014e3-1e0e-45da-81ff-bfc885f2cbbf/tempImagecAUcDq.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/ae55a801-2f33-49a6-9eed-22a172f59a92/tempImagetL2XTw.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/2daa84cf-595f-4141-ad1d-5f52462c233a/C6C4E755-ACBA-4464-930A-77882C1B63E7.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/560811b0-c5cd-436e-9825-3df52f9d3241/tempImagedXYMVV.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/47bd9fb7-f9ad-4c0d-b26a-25caf04255ee/cupcakes.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/d74079fa-dd95-4306-9548-5d65a4e7459d/mac.JPG",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/5b35df07-21dc-494f-b69b-4d83a0827b81/tempImageJvE5mA.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/91c62f72-2e2a-4547-bc46-f7e4279f0d42/tempImagejSxXj2.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/96894126-73c8-4e3f-858b-3ebd43d8c012/tempImage49Yv9F.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/53454ce0-632e-4885-9703-9943bf82a91e/Sybil+and+Bobby+-+The+Nomad+SNEAKS-56_websize.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/da039bca-f190-4961-bf53-b823715b30fb/tempImageAh6Z4k.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/51d11d20-0d36-4413-b80d-77a34d9f99cb/tempImagetOIAi3.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/aaa596b1-746c-4d62-baaa-e04c80e05fee/tempImagehR5ITL.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/f581a4df-9ff3-477b-88f1-139c531fe50f/Winston+Marie+Cakes+LogoLP.png?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/a4e8fb14-f44f-4d0b-9628-24eae99e445a/mac+tower.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/b7a53bc4-1522-41b2-b153-bd0efb573e89/tempImageygF7mG.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/6c9cad5d-57da-46ba-bccc-6986eb586d78/tempImageEdQhWb.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/c279bf46-0a36-4529-9bad-c78f82f75a60/cup1.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/f506ff88-429d-4787-a99a-29b1b7a1d4d2/tempImageZdjtin.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/e7d1a99a-59bd-482b-be77-3fe092b4fa06/tempImagexiXqcm.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/e065527e-f1b7-4ca3-900f-a45d04218c94/tempImageDw7zh8.jpg",
    "https://images.squarespace-cdn.com/content/v1/63f455796af1193d27f7a195/bdd334a8-19cf-4eba-acbc-9a7b4a88a136/tempImageLMI2Lr.jpg"
];

interface ConfectionsProps {
    onOpenBooking: () => void;
}

const Confections: React.FC<ConfectionsProps> = ({ onOpenBooking }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#2D1A1D] pt-64 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-luxury text-[10px] md:text-xs text-[#F2BBC2] tracking-[0.4em] block mb-6">
                            Handcrafted Artistry
                        </span>
                        <h1 className="text-6xl md:text-8xl leading-none text-white serif mb-10">
                            Confections
                        </h1>
                        <div className="w-16 h-px bg-[#F2BBC2]/20 mx-auto mb-10"></div>

                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#F2BBC2]/80 serif italic leading-relaxed font-light">
                            Winston Marie Cakes specializes in handcrafted confections, offering a variety of luxurious items made from high-quality ingredients. The selection includes elegant French macarons, sugar cookies, cupcakes, and petit choux, all designed to enhance events and delight guests. Customers can request customized assortments for their occasions. The facility is not nut-free, and potential allergens may be present in their products. Additionally, visitors can subscribe for updates via email.
                        </p>

                        <button
                            onClick={onOpenBooking}
                            className="mt-12 px-10 py-4 border border-[#F2BBC2]/30 rounded-full text-[#F2BBC2] text-[10px] uppercase tracking-[0.3em] hover:bg-[#F2BBC2] hover:text-[#7E4950] transition-all duration-500"
                        >
                            Inquire Now
                        </button>
                    </motion.div>
                </div>

                {/* Masonry-style Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {CONFECTION_IMAGES.map((url, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="relative group break-inside-avoid"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                                <img
                                    src={url}
                                    alt={`Confection ${idx + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-[#2D1A1D]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Confections;
