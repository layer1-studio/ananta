import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            const response = await fetch("https://formsubmit.co/ajax/studio.layer1@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Inquiry: ${formData.subject}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
            } else {
                throw new Error('Failed to send inquiry.');
            }
        } catch (err) {
            setStatus({ submitting: false, submitted: false, error: 'There was an error sending your message. Please try again or email us directly.' });
        }
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

                    {/* Status Messages */}
                    <div className="mb-6 h-6">
                        {status.submitted && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-ananta-gold text-sm font-medium tracking-wide"
                            >
                                Thank you. Your inquiry has been sent successfully.
                            </motion.p>
                        )}
                        {status.error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-400 text-sm font-medium tracking-wide"
                            >
                                {status.error}
                            </motion.p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 text-center">
                        <button
                            type="submit"
                            disabled={status.submitting}
                            className={`group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-serif tracking-tighter text-white bg-transparent border ${status.submitting ? 'border-gray-600 cursor-not-allowed' : 'border-white/20 hover:border-ananta-gold'} transition-colors duration-500`}
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-ananta-gold rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                            <span className="relative text-lg group-hover:text-ananta-gold transition-colors duration-300">
                                {status.submitting ? 'Sending...' : 'Send Inquiry'}
                            </span>
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactForm;
