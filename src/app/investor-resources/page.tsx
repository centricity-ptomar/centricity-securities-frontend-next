"use client";
import React from 'react';

const CHARTERS = [
    { title: "SEBI Investor Charter (Stock Broker)", link: "#" },
    { title: "SEBI Investor Charter (Depository Participants)", link: "#" },
    { title: "SEBI Investor Charter (Research Analyst)", link: "#" },
];

const GRIEVANCE_REPORTS = [
    { title: "Stock Broker", link: "#" },
    { title: "Depository Participant", link: "#" },
    { title: "Research Analyst", link: "#" },
];

const IMPORTANT_DOCUMENTS = [
    { title: "Advisory for Investors", link: "#" },
    { title: "Grievance redressal mechanism", link: "#" },
    { title: "Code of Conduct for Participants", link: "#" },
    { title: "Code of Conduct for Depositories", link: "#" },
    { title: "Rights of Investors", link: "#" },
    { title: "Responsibilities of Investors", link: "#" },
    { title: "Depository Participant - Dos and Don'ts", link: "#" },
    { title: "Anti Money Laundering Policy", link: "#" },
];

function DownloadSection({ title, items }: { title: string, items: { title: string, link: string }[] }) {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-white mb-6 border-l-4 border-brand-primary pl-4">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-primary/50 hover:bg-white/10 transition-all duration-300 group"
                    >
                        <span className="text-gray-300 group-hover:text-white font-medium pr-4">
                            {item.title}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors">
                            <svg className="w-4 h-4 text-brand-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function InvestorResourcesPage() {
    return (
        <main className="min-h-screen bg-black pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
                        Investor Resources
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Access important charters, grievance reports, and regulatory documents.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="max-w-6xl mx-auto">
                    <DownloadSection title="Investor Charters" items={CHARTERS} />
                    <DownloadSection title="Investor Grievance Reports" items={GRIEVANCE_REPORTS} />
                    <DownloadSection title="Important Documents" items={IMPORTANT_DOCUMENTS} />
                </div>
            </div>
        </main>
    );
}
