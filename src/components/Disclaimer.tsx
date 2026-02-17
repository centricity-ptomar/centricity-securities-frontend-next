"use client";
import React from 'react';

export default function Disclaimer() {
    return (
        <section className="bg-black text-gray-400 text-sm leading-relaxed">
            <div className="space-y-4">
                <p>
                    <strong className="text-white">Disclaimer:</strong> Investments in securities market are subject to market risks, read all the related documents carefully before investing. Service related to Mutual Fund, IPO, etc. are not Exchange traded products and Centricity Securities Private Limited is just acting as distributor. All disputes with respect to the distribution activity, would not have access to Exchange investor redressal forum or Arbitration mechanism.
                </p>
                <p>
                    Brokerage will not exceed the SEBI prescribed limit.
                </p>
                <p>
                    <strong className="text-white">Research Disclaimer:</strong> The information provided on this website is for educational purposes only and should not be considered as investment advice. Clients are advised to consult their financial advisors before making any investment decisions.
                </p>
            </div>
        </section>
    );
}
