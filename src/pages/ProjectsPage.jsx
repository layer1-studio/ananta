import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

// Derive a small, curated set of capability tags from each project's scope string.
const deriveCategories = (scope = '') => {
    const s = scope.toLowerCase();
    const cats = [];
    if (s.includes('photo')) cats.push('Photography');
    if (s.includes('video')) cats.push('Videography');
    if (s.includes('creative direction')) cats.push('Creative Direction');
    if (s.includes('graphic design') || s.includes('campaign strategy')) cats.push('Design & Strategy');
    return cats;
};

const CATEGORY_ORDER = ['Photography', 'Videography', 'Creative Direction', 'Design & Strategy'];

const projectsWithCategories = projects.map((p) => ({ ...p, categories: deriveCategories(p.scope) }));

const availableCategories = CATEGORY_ORDER.filter((cat) =>
    projectsWithCategories.some((p) => p.categories.includes(cat))
);

const totalAssets = projects.reduce(
    (acc, p) => acc + (p.galleryImages?.length || 0) + (p.galleryVideos?.length || 0),
    0
);

const STATS = [
    { label: 'Selected Case Studies', value: projects.length },
    { label: 'Assets Delivered', value: totalAssets, suffix: '+' },
    { label: 'Core Capabilities', value: availableCategories.length },
];

const useCountUp = (end, duration, start) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let frame;
        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) frame = requestAnimationFrame(step);
            else setCount(end);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [start, end, duration]);
    return count;
};

const StatTile = ({ value, label, suffix, delay }) => {
    const count = useCountUp(value, 1.4, true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="border-l border-white/10 pl-6"
        >
            <div className="text-4xl md:text-5xl font-serif text-ananta-gold">
                {count}
                {suffix || ''}
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">{label}</div>
        </motion.div>
    );
};

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects =
        activeFilter === 'All'
            ? projectsWithCategories
            : projectsWithCategories.filter((p) => p.categories.includes(activeFilter));

    return (
        <div className="pt-24 min-h-screen bg-ananta-bg text-white">
            <SEO title="Selected Projects" description="Explore our case studies in narrative strategy, cultural engineering, and lasting influence." />

            {/* Header */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6">Our Work</p>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">
                        Selected <span className="text-ananta-gold italic">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl font-light">
                        Case studies in narrative strategy, cultural engineering, and lasting influence.
                    </p>
                </motion.div>
            </section>

            {/* Marquee Ticker */}
            <section className="border-y border-white/10 py-4 overflow-hidden select-none">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(2)].map((_, dupeIdx) => (
                        <div key={dupeIdx} className="flex items-center">
                            {projects.map((p) => (
                                <span
                                    key={`${dupeIdx}-${p.id}`}
                                    className="flex items-center text-lg md:text-xl font-serif italic text-gray-500 mx-6"
                                >
                                    {p.title}
                                    <span className="text-ananta-gold mx-6 not-italic">&#10022;</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {STATS.map((stat, idx) => (
                        <StatTile key={stat.label} {...stat} delay={idx * 0.1} />
                    ))}
                </div>
            </section>

            {/* Category Filters */}
            <section className="px-6 max-w-7xl mx-auto mb-12">
                <div className="flex flex-wrap gap-3">
                    {['All', ...availableCategories].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all duration-300 ${
                                activeFilter === cat
                                    ? 'bg-ananta-gold text-ananta-bg border-ananta-gold'
                                    : 'border-white/15 text-gray-400 hover:border-ananta-gold/60 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32 px-6 max-w-7xl mx-auto">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => {
                            const hasVideo = Boolean(project.videoFile || project.videoUrl || project.galleryVideos?.length);
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                                >
                                    <Link to={`/projects/${project.id}`} className="group block h-full">
                                        <article className="relative bg-white/5 border border-white/10 overflow-hidden hover:border-ananta-gold/50 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-ananta-gold/10">
                                            {/* Index Badge */}
                                            <span className="absolute top-4 left-4 z-10 text-xs font-semibold tracking-widest text-ananta-gold bg-ananta-bg/80 px-2 py-1 border border-ananta-gold/30">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            {/* Image Container */}
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={project.coverImage}
                                                    alt={project.title}
                                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                                                {/* Category Chips */}
                                                {project.categories.length > 0 && (
                                                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                                        {project.categories.slice(0, 2).map((cat) => (
                                                            <span
                                                                key={cat}
                                                                className="text-[10px] uppercase tracking-widest font-semibold bg-ananta-bg/80 text-ananta-gold px-2 py-1 border border-ananta-gold/30"
                                                            >
                                                                {cat}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {hasVideo && (
                                                    <span className="absolute bottom-4 right-4 text-ananta-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                                        <PlayCircle size={22} />
                                                    </span>
                                                )}

                                                {/* Overlay Icon */}
                                                <div className="absolute top-4 right-4 bg-ananta-bg/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 group-hover:rotate-45 transition-all duration-300">
                                                    <ArrowUpRight size={20} className="text-ananta-gold" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-8 flex-1 flex flex-col">
                                                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-ananta-gold transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm leading-relaxed flex-1 font-light">
                                                    {project.shortDescription}
                                                </p>
                                                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs tracking-widest uppercase">
                                                    <span className="text-gray-500 group-hover:text-white transition-colors duration-300">View Case Study</span>
                                                    <span className="text-ananta-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                        &rarr;
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-500 py-24">No projects match this filter yet.</p>
                )}
            </section>
        </div>
    );
};

export default ProjectsPage;
