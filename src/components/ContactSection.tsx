"use client";
import React, { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Submitted", formData);
        alert("Message Sent! We will contact you shortly.");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle mx-auto">
                        Have questions? Our support team is here to help you with any queries regarding our services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-white mb-2">Visit Us</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Unit No 207 A & 207B, Tower-B,<br />
                                    Global Business Park, Gurugram,<br />
                                    Haryana-122002
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-white mb-2">Email Us</h3>
                                <p className="text-gray-400">
                                    <a href="mailto:support@centricity.co.in" className="hover:text-brand-primary transition-colors">
                                        support@centricity.co.in
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Heading for Hours usually, or just general info */}
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-white mb-2">Business Hours</h3>
                                <p className="text-gray-400">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday - Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="input-field resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
