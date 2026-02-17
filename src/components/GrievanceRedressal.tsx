"use client";
import React, { useRef } from 'react';

export default function GrievanceRedressal() {
    const ref = useRef(null);

    const contactPoints = [
        {
            level: "Level 1",
            title: "Customer Care",
            contact: "support@centricity.co.in",
            desc: "First point of contact for any queries or complaints."
        },
        {
            level: "Level 2",
            title: "Head of Customer Care",
            contact: "grievance@centricity.co.in",
            desc: "If not satisfied with Level 1 resolution within 7 working days."
        },
        {
            level: "Level 3",
            title: "Compliance Officer",
            contact: "compliance@centricity.co.in",
            desc: "For escalation if Level 2 does not resolve the issue within 7 working days."
        },
        {
            level: "Level 4",
            title: "CEO / Directors",
            contact: "ceo@centricity.co.in",
            desc: "Final level of escalation within the organization."
        }
    ];

    return (
        <section ref={ref} className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">Grievance Redressal</h2>
                    <p className="section-subtitle mx-auto">
                        We are committed to quick and effective resolution of your complaints. Please follow the escalation matrix below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactPoints.map((point, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white/5 rounded-xl px-6 py-8 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/5 group"
                        >
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">
                                    {point.level}
                                </span>
                                <h3 className="text-xl font-bold font-heading text-white group-hover:text-brand-primary transition-colors">
                                    {point.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                {point.desc}
                            </p>

                            <div className="pt-6 border-t border-white/10 mt-auto">
                                <a
                                    href={`mailto:${point.contact}`}
                                    className="flex items-center gap-2 text-brand-primary font-medium hover:text-white transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {point.contact}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-lg font-bold text-brand-primary mb-2">Filing a Complaint with SEBI?</h4>
                        <p className="text-gray-300 text-sm">
                            If your complaint is not resolved within the prescribed time, you may lodge your complaint with SCORES (SEBI Complaints Redress System).
                        </p>
                    </div>
                    <a
                        href="https://scores.sebi.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-full hover:bg-[#a38065] transition-colors whitespace-nowrap"
                    >
                        Visit SCORES Portal
                    </a>
                </div>
            </div>
        </section>
    );
}
