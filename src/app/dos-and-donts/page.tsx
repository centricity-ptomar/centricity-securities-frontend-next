import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Investor Do's and Don'ts | OneInvest",
    description: "Essential guidelines for investors: Do's and Don'ts for NSDL, CDSL, and Stock Exchanges.",
};

export default function DosAndDontsPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-primary">
                        Investor Do's and Don'ts
                    </h1>
                    <p className="text-gray-400 mb-12 text-lg">
                        Please read these guidelines carefully to ensure a safe and secure investing experience.
                    </p>

                    <div className="space-y-12">
                        {/* NSDL Section */}
                        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-brand-primary rounded-full"></span>
                                NSDL & CDSL (Depositories)
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-green-400 font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Do's
                                    </h3>
                                    <ul className="space-y-3 text-gray-300 text-sm list-disc pl-5">
                                        <li>Register for SMS/Email alerts with NSDL/CDSL to receive instant notifications of any debit/credit in your demat account.</li>
                                        <li>Update your mobile number and email ID with your Depository Participant (DP) to receive timely alerts.</li>
                                        <li>Regularly verify your transaction statements and holding statements sent by your DP.</li>
                                        <li>Appoint a nominee for your demat account to facilitate the smooth transmission of securities.</li>
                                        <li>Ensure that you receive the contract note/confirmation note for every trade executed within 24 hours.</li>
                                        <li>Keep your Delivery Instruction Slip (DIS) book safely and verify the serial numbers.</li>
                                        <li>Strike out empty spaces on the DIS slip before submitting it.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-red-400 font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Don'ts
                                    </h3>
                                    <ul className="space-y-3 text-gray-300 text-sm list-disc pl-5">
                                        <li>Do not share your login ID, password, or OTP with anyone, including your broker's employees.</li>
                                        <li>Do not sign blank Delivery Instruction Slips (DIS).</li>
                                        <li>Do not leave your DIS book with your broker or DP.</li>
                                        <li>Do not fall prey to schemes offering guaranteed returns or unrealistic profits.</li>
                                        <li>Do not share your critical account details with unknown callers or on unverified links.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Exchange Section */}
                        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-brand-secondary rounded-full"></span>
                                Stock Exchanges (NSE & BSE)
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-green-400 font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Do's
                                    </h3>
                                    <ul className="space-y-3 text-gray-300 text-sm list-disc pl-5">
                                        <li>Deal only with SEBI registered stockbrokers and check their registration details.</li>
                                        <li>Read the Risk Disclosure Document (RDD) and Rights & Obligations document carefully before trading.</li>
                                        <li>Keep track of your running account settlement and ensure funds/securities are settled monthly/quarterly.</li>
                                        <li>Make payments only from your own bank account and receive payments into your own bank account.</li>
                                        <li>Verify the credentials of the research analyst or investment advisor before acting on their advice.</li>
                                        <li>File complaints immediately if you notice any unauthorized trades or discrepancies.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-red-400 font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Don'ts
                                    </h3>
                                    <ul className="space-y-3 text-gray-300 text-sm list-disc pl-5">
                                        <li>Do not deal with unregistered intermediaries or entities.</li>
                                        <li>Do not pay cash for any transaction; always use banking channels.</li>
                                        <li>Do not borrow money solely for the purpose of investing in the stock market.</li>
                                        <li>Do not be misled by rumors, hot tips, or unsolicited advice on social media.</li>
                                        <li>Do not share your specialized trading software credentials with others.</li>
                                        <li>Do not ignore SMS/Email alerts from the Exchange regarding your trades.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
