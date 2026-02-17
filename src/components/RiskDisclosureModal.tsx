"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RiskDisclosureModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasAcknowledged = localStorage.getItem('risk-disclosure-acknowledged');
        if (!hasAcknowledged) {
            setIsOpen(true);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }
    }, []);

    const handleAcknowledge = () => {
        localStorage.setItem('risk-disclosure-acknowledged', 'true');
        setIsOpen(false);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#111] border boundary-glow rounded-2xl max-w-2xl w-full flex flex-col max-h-[90vh] shadow-2xl transform transition-all scale-100">

                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 rounded-t-2xl">
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-primary">
                        Important Risk Disclosures
                    </h2>
                </div>

                {/* Content - Scrollable */}
                <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 text-gray-300 text-sm leading-relaxed">

                    {/* SEBI Risk Disclosure */}
                    <div className="bg-red-900/10 border border-red-500/30 p-4 rounded-xl">
                        <h3 className="text-red-400 font-bold mb-3 uppercase tracking-wide flex items-center gap-2">
                            Risk Disclosures on Derivatives
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                            <li>9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</li>
                            <li>On an average, loss makers registered net trading loss close to ₹ 50,000.</li>
                            <li>Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</li>
                            <li>Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.</li>
                        </ul>
                        <p className="mt-3 text-xs text-gray-500 italic">Source: SEBI study dated January 25, 2023 on “Analysis of Profit and Loss of Individual Traders dealing in equity Futures and Options (F&O) Segment”, wherein Aggregate Level findings are based on annual Profit/Loss incurred by individual traders in equity F&O during FY 2021-22.</p>
                    </div>

                    {/* KYC & Unauthorized Transactions */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Attention Investors</h3>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h4 className="text-brand-primary font-semibold mb-2">KYC Compliance</h4>
                            <p>
                                KYC is a one-time exercise while dealing in securities markets — once KYC is completed through a SEBI registered intermediary (Broker, DP, Mutual Fund, etc.), you need not undergo the same process again when approaching another intermediary.
                            </p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <h4 className="text-brand-primary font-semibold mb-2">Prevent Unauthorized Transactions</h4>
                            <p>
                                Update your mobile number/email ID with your stock broker/depository participant and receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer - Actions */}
                <div className="p-6 border-t border-white/10 bg-black/20 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center sm:text-left">
                        By continuing, you acknowledge that you have read and understood these disclosures.
                    </p>
                    <button
                        onClick={handleAcknowledge}
                        className="btn-primary w-full sm:w-auto min-w-[150px]"
                    >
                        I Acknowledge
                    </button>
                </div>
            </div>
        </div>
    );
}
