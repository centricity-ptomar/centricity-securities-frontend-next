"use client";
import Link from 'next/link';

const SOCIAL_LINKS = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/CentricityWealthTech',
        icon: (
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/centricity-wealthtech/',
        icon: (
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        ),
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/centricitywealthtech',
        icon: (
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        ),
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@centricityspeaks',
        icon: (
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        ),
    },
];

const ONE_INVEST_LINKS = [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Media & Press', href: '/press' },
    { label: 'Careers', href: '/careers' },
    { label: 'Help & Support', href: '/contact' },
];

const PRODUCTS_LINKS = [
    { label: 'Stocks', href: '/' },
    { label: 'Futures & Options', href: '/' },
    { label: 'Mutual Funds', href: '/' },
    { label: 'US Stocks', href: '/' },
    { label: 'IPO', href: '/' },
];

const QUICK_LINKS = [
    { label: 'Regulatory Disclosures', href: '/regulatory' },
    { label: 'Investor Charter and Grievance Reports', href: '/investor-resources' },
    { label: 'Investor Complaints', href: '/investor-complaints' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Terms of Use', href: '/terms-of-use' },
    { label: 'Download Forms', href: '/downloads' },
    { label: 'ODR Portal', href: 'https://smartodr.in/', external: true },
    { label: 'SCORES Portal', href: 'https://scores.sebi.gov.in', external: true },
];

const IMPORTANT_LINKS = [
    { label: 'SEBI', href: 'https://www.sebi.gov.in/' },
    { label: 'RBI', href: 'https://www.rbi.org.in/' },
    { label: 'TRAI', href: 'https://trai.gov.in/' },
    { label: 'BSE', href: 'https://www.bseindia.com/' },
    { label: 'NSE', href: 'https://www.nseindia.com/' },
    { label: 'CDSL', href: 'https://www.cdslindia.com/' },
    { label: 'NSDL e-Voting', href: 'https://evoting.nsdl.com/' },
    { label: 'CDSL e-Voting', href: 'https://www.evotingindia.com/' },
    { label: 'SCORES', href: 'https://scores.sebi.gov.in' },
    { label: 'ODR Portal', href: 'https://smartodr.in/' },
    { label: 'Investor Charter for Stock Brokers', href: '/investor-charter' },
    { label: 'Investor Charter for DP', href: '/investor-charter' },
    { label: 'Account Opening Procedure', href: '/regulatory' },
    { label: 'Filing a complaint', href: '/investor-complaints' },
]

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 font-sans text-[13px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Main Grid: 4 Columns like Groww */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Contact & Socials */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold font-heading text-white tracking-tight">OneInvest</span>
                        </div>
                        <div className="text-gray-400 space-y-2 leading-relaxed">
                            <p>
                                Unit No 207 A & 207B, Tower-B,<br />
                                Global Business Park, Gurugram,<br />
                                Haryana-122002
                            </p>
                            <p>
                                <a href="mailto:support@centricity.co.in" className="hover:text-brand-primary transition-colors">
                                    support@centricity.co.in
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-3 pt-2">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-all duration-300 transform hover:scale-105"
                                    aria-label={link.label}
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        {link.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: OneInvest */}
                    <div>
                        <h3 className="font-heading font-bold text-brand-primary mb-6 uppercase tracking-wider text-sm">
                            OneInvest
                        </h3>
                        <ul className="space-y-3">
                            {ONE_INVEST_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div>
                        <h3 className="font-heading font-bold text-brand-primary mb-6 uppercase tracking-wider text-sm">
                            Products
                        </h3>
                        <ul className="space-y-3">
                            {PRODUCTS_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div>
                        <h3 className="font-heading font-bold text-brand-primary mb-6 uppercase tracking-wider text-sm">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        target={link.external ? "_blank" : "_self"}
                                        rel={link.external ? "noopener noreferrer" : ""}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-8" />

                {/* Bottom Section: Risk Disclosures & Compliance */}
                <div className="space-y-8 text-gray-400 text-[11px] leading-relaxed text-justify">

                    {/* SEBI 9/10 Risk Warning */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                        <h4 className="text-brand-primary font-bold mb-2 uppercase tracking-wide">Risk Disclosures on Derivatives</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-300">
                            <li>9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</li>
                            <li>On an average, loss makers registered net trading loss close to ₹ 50,000.</li>
                            <li>Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</li>
                            <li>Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.</li>
                        </ul>
                    </div>

                    {/* Attention Investors */}
                    <div className="space-y-2">
                        <h4 className="text-brand-primary font-bold uppercase tracking-wide">Attention – A note from the Regulators for Investors</h4>
                        <p>
                            Stock brokers can accept securities as margin from clients only by way of pledge in the depository system, with effect from Sept 1, 2020. Update your mobile number and email ID with your stock broker/depository participant and receive OTP directly from depository on your email ID and/or mobile number to create pledges. Pay 20% upfront margin of the transaction value to trade in the Cash market segment.
                        </p>
                        <p>
                            Investors may please refer to the Exchanges’ (NSE and BSE) Frequently Asked Questions (FAQs), issued vide circular reference NSE/INSP/45191 and 20200731-7 dated July 31, 2020; NSE/INSP/45534 and 20200831-45 dated Aug 31, 2020; notice no. 20200731-7 dated July 31, 2020 and 20200831-45 dated Aug 31, 2020; and other guidelines issued from time to time in this regard. Check your Securities/MF/Bonds in the consolidated account statement issued by NSDL/CDSL every month.
                        </p>
                    </div>

                    {/* Company Registration Details */}
                    <div className="border-t border-white/5 pt-6">
                        <p className="mb-2">
                            <strong className="text-white">SEBI Stock Broker Registration No:</strong> INZ000323234 |
                            <strong className="text-white"> AMFI Registration No:</strong> ARN – 189274 (Valid till 25/OCT/2027) |
                            <strong className="text-white"> CIN:</strong> U67190HR2021PTC096860 |
                            <strong className="text-white"> Exchange Membership No:</strong> NSE: 90293 | BSE: 6767
                        </p>
                        <p className="mb-2">
                            <strong className="text-white">Registered Office:</strong> Unit No 207 A & 207B, Tower-B, Global Business Park, Gurugram, Haryana-122002.
                        </p>
                        <p>
                            In case of grievances for any of the services rendered by Centricity Securities Private Limited, please write to <a href="mailto:grievance@centricity.co.in" className="text-brand-primary hover:underline">grievance@centricity.co.in</a>. Please ensure that you carefully read the Risk Disclosure Document as prescribed by SEBI, our Terms of Use and Privacy Policy.
                        </p>
                    </div>

                    {/* Important Links */}
                    <div className="border-t border-white/5 pt-6 space-y-4">
                        <div>
                            <h4 className="text-brand-primary font-bold mb-2 uppercase tracking-wide text-[10px]">Important Links</h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {IMPORTANT_LINKS.map((link, idx) => (
                                    <span key={idx} className="flex items-center gap-2">
                                        <Link href={link.href} target="_blank" className="hover:text-white transition-colors">{link.label}</Link>
                                        {idx < IMPORTANT_LINKS.length - 1 && <span className="text-gray-700">|</span>}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Important Information Marquee */}
                    <div className="border-t border-white/5 mt-6 py-3 bg-white/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative group">
                        <div className="animate-marquee whitespace-nowrap inline-block">
                            <span className="text-brand-primary font-bold uppercase text-[11px] mr-2">Important Information:</span>
                            <span className="text-gray-300 text-[12px] font-medium">
                                KYC is a one-time exercise while dealing in securities markets — once KYC is completed through a SEBI registered intermediary (Broker, DP, Mutual Fund, etc.), you need not undergo the same process again when approaching another intermediary. Prevent unauthorized transactions in your demat account — update your mobile number with your Depository Participant.
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5">
                        <p className="text-gray-500">
                            © Copyright 2026 Centricity Securities Pvt. Ltd. All rights reserved.
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}
