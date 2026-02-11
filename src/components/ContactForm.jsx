import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        const mailtoLink = `mailto:Ananta.internal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto" id="contact-form">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
            >
                <div className="text-center mb-16">
                    <p className="text-ananta-gold uppercase tracking-widest text-xs font-semibold mb-6">Get in Touch</p>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                        Start an <span className="text-ananta-gold italic">Inquiry</span>
                    </h2>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto">
                        For detailed proposals or collaboration requests, please fill out the form below to connect directly with our internal team.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-ananta-gold font-semibold">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ananta-gold transition-colors placeholder-white/10"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-ananta-gold font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ananta-gold transition-colors placeholder-white/10"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs uppercase tracking-widest text-ananta-gold font-semibold">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ananta-gold transition-colors placeholder-white/10"
                            placeholder="Project Inquiry / Partnership"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-widest text-ananta-gold font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-ananta-gold transition-colors placeholder-white/10 resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8 text-center">
                        <button
                            type="submit"
                            className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-serif tracking-tighter text-white bg-transparent border border-white/20 hover:border-ananta-gold transition-colors duration-500"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-ananta-gold rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                            <span className="relative text-lg group-hover:text-ananta-gold transition-colors duration-300">Send Inquiry</span>
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactForm;
