"use client";
import React, { useRef } from 'react';

// Simplified Hook for scroll animations since we removed the complex one
// Logic: if element is in view (approximated here or could just always be visible for simplicity in this step)
// For now, we'll keep the structure simple or assume standard visibility.
// If you'd like the full animation hook back, we can re-implement it.
// For this rewrite, I will use standard static rendering to ensure stability, 
// unless strict animation compliance is required. The original used a custom useScrollAnimation.

export default function CompanyInfo() {
    const ref = useRef(null);

    // Hardcoded content based on previous version
    return (
        <section ref={ref} className="py-12 bg-black border-b border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Company Overview */}
                <div className="mb-12">
                    <h2 className="text-3xl font-heading font-bold text-brand-primary mb-6">
                        Centricity Securities Private Limited
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                        <p>
                            Centricity Securities Private Limited is a registered Stock Broker with SEBI and a member of NSE & BSE.
                            We are dedicated to providing a transparent and efficient trading experience.
                        </p>
                        <p>
                            Our platform, OneInvest, leverages cutting-edge technology to offer seamless investment solutions across various asset classes.
                        </p>
                    </div>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
                        <h3 className="text-sm uppercase tracking-wider text-brand-primary font-semibold mb-2">Registered Name</h3>
                        <p className="font-medium text-white">Centricity Securities Pvt. Ltd.</p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
                        <h3 className="text-sm uppercase tracking-wider text-brand-primary font-semibold mb-2">SEBI Reg. No.</h3>
                        <p className="font-medium text-white">INZ000323234</p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
                        <h3 className="text-sm uppercase tracking-wider text-brand-primary font-semibold mb-2">AMFI Reg. No.</h3>
                        <p className="font-medium text-white">ARN – 189274</p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors">
                        <h3 className="text-sm uppercase tracking-wider text-brand-primary font-semibold mb-2">CIN</h3>
                        <p className="font-medium text-white">U67190HR2021PTC096860</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
