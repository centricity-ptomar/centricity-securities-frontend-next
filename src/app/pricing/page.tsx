import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-6">
                        Pricing & Brokerage
                    </h1>
                    <p className="text-gray-400 mb-12 text-lg">
                        Transparent pricing with no hidden charges. We believe in keeping it simple and affordable.
                    </p>

                    <div className="space-y-12">
                        {/* Brokerage Charges */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Brokerage Charges
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                                <table className="min-w-full divide-y divide-white/10 text-sm">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-medium text-brand-primary uppercase tracking-wider">Segment</th>
                                            <th className="px-6 py-4 text-left font-medium text-brand-primary uppercase tracking-wider">Brokerage Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-gray-300">
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4">Equity Delivery</td>
                                            <td className="px-6 py-4">Free (₹0 per executed order)</td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4">Equity Intraday</td>
                                            <td className="px-6 py-4">Flat ₹20 or 0.05% (whichever is lower) per executed order</td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4">Equity Futures & Options (F&O)</td>
                                            <td className="px-6 py-4">Flat ₹20 per executed order</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Account Opening & AMC */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                Account Opening & AMC
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                    <div className="text-gray-400 mb-2">Trading & Demat Account Opening</div>
                                    <div className="text-3xl font-bold text-white mb-1">₹0 <span className="text-sm font-normal text-brand-primary ml-2 uppercase tracking-wide">Free</span></div>
                                    <p className="text-sm text-gray-500 mt-4">One-time account opening fee is completely waived off.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                    <div className="text-gray-400 mb-2">Account Maintenance Charge (AMC)</div>
                                    <div className="text-3xl font-bold text-white mb-1">₹0 <span className="text-sm font-normal text-brand-primary ml-2 uppercase tracking-wide">Free</span></div>
                                    <p className="text-sm text-gray-500 mt-4">Zero AMC for the first year. Standard charges apply thereafter.</p>
                                </div>
                            </div>
                        </section>

                        {/* Regulatory & Risk Disclosures */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                Regulatory Risks & Obligations
                            </h2>
                            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl prose prose-invert max-w-none text-sm space-y-4">
                                <p className="text-gray-300">
                                    Pricing details are shown as per industry norms. Investors should receive complete information about the risks, obligations, and costs of any investment before investing as per circular no <span className="font-medium text-white">SEBI/HO/MIRSD/MIRSD-PoD1/P/CIR/2025/22</span>.
                                </p>
                                <div className="bg-black/20 p-4 rounded-lg">
                                    <h4 className="text-brand-primary font-bold mb-2 uppercase tracking-wide">Risk Disclosures on Derivatives</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                        <li>9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</li>
                                        <li>On an average, loss makers registered net trading loss close to ₹ 50,000.</li>
                                        <li>Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</li>
                                        <li>Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.</li>
                                    </ul>
                                </div>
                                <p className="text-gray-400 text-xs mt-4">
                                    Note: Additional regulatory charges such as STT, Stamp Duty, Exchange Transaction Charges, GST, and SEBI charges are levied over and above the brokerage charges as per applicable statutory rates.
                                </p>
                            </div>
                        </section>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
