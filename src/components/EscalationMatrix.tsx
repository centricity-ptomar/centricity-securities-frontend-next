"use client";
import React, { useRef } from 'react';

export default function EscalationMatrix() {
    const ref = useRef(null);

    const matrix = [
        {
            level: "Level 1",
            role: "Customer Care",
            contact: "support@centricity.co.in",
            tat: "24 Hours"
        },
        {
            level: "Level 2",
            role: "Head of Customer Care",
            contact: "grievance@centricity.co.in",
            tat: "48 Hours"
        },
        {
            level: "Level 3",
            role: "Compliance Officer",
            contact: "compliance@centricity.co.in",
            tat: "7 Days"
        },
        {
            level: "Level 4",
            role: "CEO",
            contact: "ceo@centricity.co.in",
            tat: "7 Days"
        }
    ];

    return (
        <section ref={ref} className="py-16 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="section-title text-2xl md:text-3xl">Escalation Matrix</h2>
                    <p className="text-gray-400">
                        In absence of response/complaint not addressed to your satisfaction, you may lodge a complaint with SEBI at <a href="https://scores.gov.in" className="text-brand-primary hover:underline">SCORES</a> or Exchange at <a href="https://niceplus.nseindia.com" className="text-brand-primary hover:underline">NICE Plus</a>.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl shadow-lg bg-white/5 border border-white/10">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="p-4 font-heading font-bold text-brand-primary">Level</th>
                                <th className="p-4 font-heading font-bold text-brand-primary">Role</th>
                                <th className="p-4 font-heading font-bold text-brand-primary">Contact Details</th>
                                <th className="p-4 font-heading font-bold text-brand-primary">TAT</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {matrix.map((row) => (
                                <tr key={row.role} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white font-medium">{row.level}</td>
                                    <td className="p-4 text-gray-300">{row.role}</td>
                                    <td className="p-4 text-gray-300">
                                        <a href={`mailto:${row.contact}`} className="hover:text-brand-primary transition-colors">
                                            {row.contact}
                                        </a>
                                    </td>
                                    <td className="p-4 text-gray-400">{row.tat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
