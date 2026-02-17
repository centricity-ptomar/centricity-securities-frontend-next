"use client";
import React, { useRef } from 'react';

export default function AttentionInvestors() {
    const ref = useRef(null);

    const notices = [
        {
            title: "KYC Compliance",
            content: "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.",
            highlight: true
        },
        {
            title: "Mandatory Details",
            content: "Issues related to Duplicate/Show cause notice/Hearing of the case etc. may be communicated to the registered email id.",
            highlight: false
        },
        {
            title: "Pledge of Securities",
            content: "Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.",
            highlight: false
        }
    ];

    return (
        <section ref={ref} className="py-16 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title text-center text-3xl mb-12">Attention Investors</h2>

                <div className="grid gap-6 max-w-4xl mx-auto">
                    {notices.map((notice, index) => (
                        <div
                            key={index}
                            className={`
                bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300
                ${notice.highlight ? 'border-brand-primary/30 bg-brand-primary/5' : 'hover:border-white/20'}
              `}
                        >
                            <h3 className="text-xl font-bold font-heading text-brand-primary mb-3">
                                {notice.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {notice.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
