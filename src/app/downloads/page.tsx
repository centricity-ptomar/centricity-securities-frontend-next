"use client";
import React from 'react';
import Link from 'next/link';

const FORMS = [
    {
        title: "Account Opening Form",
        description: "Form for opening a trading and demat account with OneInvest.",
        link: "#"
    },
    {
        title: "Account Closure Form",
        description: "Form for closing your trading and demat account.",
        link: "#"
    },
    {
        title: "Change Bank Details Form",
        description: "Request to update your registered bank account details.",
        link: "#"
    },
    {
        title: "KYC Update Form",
        description: "Form for updating your KYC details (address, email, mobile).",
        link: "#"
    },
    {
        title: "Change DP Details Form",
        description: "Request to modify your Depository Participant details.",
        link: "#"
    },
    {
        title: "Change Nominee Form",
        description: "Add, update, or remove nominees for your trading and demat account.",
        link: "#"
    },
    {
        title: "Live Margin Files",
        description: "Download the latest margin files for enabled segments.",
        link: "#"
    }
];

export default function DownloadsPage() {
    return (
        <main className="min-h-screen bg-black pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
                        Downloads Center
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Access and download all necessary forms for your account management, compliance, and service requests.
                    </p>
                </div>

                {/* Forms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FORMS.map((form, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/5 group flex flex-col"
                        >
                            <div className="mb-4">
                                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                                    <svg className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-brand-primary transition-colors">
                                    {form.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {form.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/10">
                                <Link
                                    href={form.link}
                                    target="_blank"
                                    prefetch={false}
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white/5 hover:bg-brand-primary text-brand-primary hover:text-white font-semibold transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download PDF
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
