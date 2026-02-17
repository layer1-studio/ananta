import React from 'react';
import { motion } from 'framer-motion';

// Import Images
import luxuryImg from '../assets/projects/Valentina/Photos/058A0402.jpg';
import policyImg from '../assets/pages/economist.jpg';
import ngoImg from '../assets/pages/empower.jpg';
import politicalImg from '../assets/mission-visual.png'; // Using mission visual as fallback for Political
import sportsImg from '../assets/projects/SigiriyaHornets/sigiriya Hornets.png';

// Import Videos
import sigiriyaVideo from '../assets/projects/SigiriyaHornets/sigiriya1.mp4';

const FocusAreas = () => {
    const sectors = [
        {
            title: "Luxury & Lifestyle",
            description: "Curating timeless narratives for premium brands and fine jewellery, blending heritage with modern elegance.",
            bgImage: luxuryImg,
            delay: 0.1
        },
        {
            title: "Sports & Leisure",
            description: "Elevating the spirit of competition through strategic initiatives in high-performance sports and premium leisure.",
            bgImage: sportsImg,
            // bgVideo: sigiriyaVideo, // Commmented out video to use image as requested
            delay: 0.2
        },
        {
            title: "Public Policy & Governance",
            description: "Bridging the gap between institutions and the public with clear, impactful governance communication.",
            bgImage: policyImg,
            delay: 0.3
        },
        {
            title: "NGOs & Social Impact",
            description: "Amplifying the voices of changemakers and development-focused organizations for sustainable global impact.",
            bgImage: ngoImg,
            delay: 0.4
        },
        {
            title: "Political Communication",
            description: "Navigating complex political landscapes with strategic campaign management and resonant messaging.",
            bgImage: politicalImg,
            delay: 0.5
        }
    ];

    return (
        <section className="py-24 bg-ananta-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6 text-center">Our Expertise</p>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 text-center">Sectors & Focus Areas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: sector.delay, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group h-80 perspective-1000 cursor-pointer"
                        >
                            <div className="relative w-full h-full text-center transition-all duration-700 preserve-3d rotate-y-180-hover shadow-xl rounded-xl border border-white/5">

                                {/* Front Side */}
                                <div className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center backface-hidden z-20 overflow-hidden">
                                    {/* Subtle background pattern or gradient for the front */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>

                                    <span className="text-ananta-gold mb-4 text-2xl">◆</span>
                                    <h3 className="text-2xl font-serif text-white relative z-10">{sector.title}</h3>
                                    <div className="w-12 h-0.5 bg-ananta-gold/50 mt-4 relative z-10 group-hover:w-24 transition-all duration-500"></div>
                                </div>

                                {/* Back Side (Image/Video + Description) */}
                                <div className="absolute inset-0 w-full h-full rounded-xl backface-hidden rotate-y-180 overflow-hidden bg-black">
                                    {/* Background: Video or Image */}
                                    {sector.bgVideo ? (
                                        <video
                                            src={sector.bgVideo}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                    ) : (
                                        <img
                                            src={sector.bgImage}
                                            alt={sector.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                    )}

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                                        <h3 className="text-xl font-serif text-ananta-gold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{sector.title}</h3>
                                        <p className="text-gray-200 text-sm leading-relaxed translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                            {sector.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusAreas;
