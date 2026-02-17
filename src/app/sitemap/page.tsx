import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Sitemap | OneInvest',
    description: 'Sitemap for OneInvest - Explore all pages and resources.',
};

const sitemapLinks = [
    {
        category: 'Company',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'Press & Media', href: '/press' },
            { label: 'Blogs', href: '/blogs' },
        ]
    },
    {
        category: 'Investor Resources',
        links: [
            { label: 'Investor Resources', href: '/investor-resources' },
            { label: 'Downloads', href: '/downloads' },
            { label: 'Investor Charter', href: '/investor-charter' },
            { label: 'Investor Complaints', href: '/investor-complaints' },
            { label: 'Grievance Redressal', href: '/grievance-redressal' },
            { label: 'Regulatory', href: '/regulatory' },
        ]
    },
    {
        category: 'Legal & Policies',
        links: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Use', href: '/terms-of-use' },
            { label: 'Disclaimer', href: '/disclaimer' },
        ]
    }
];

export default function Sitemap() {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-brand-primary">
                        Sitemap
                    </h1>
                    <p className="text-gray-400 mb-12">
                        Navigate through all the pages available on OneInvest.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {sitemapLinks.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">
                                    {section.category}
                                </h2>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
