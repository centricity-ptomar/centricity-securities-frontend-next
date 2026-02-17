"use client";
import React from 'react';
import Link from 'next/link';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Header() {
    const scrollY = useScrollPosition();
    const isScrolled = scrollY > 20;

    const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-white/10 py-3'
        : 'bg-transparent py-5'
        }`;

    return (
        <header
            id="main-header"
            className={headerClasses}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0" aria-label="OneInvest Home">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold font-heading text-brand-primary tracking-tight">
                                OneInvest
                            </span>
                        </div>
                    </Link>

                    {/* Right Side Actions - Minimal as requested */}
                    <div className="flex items-center gap-6">
                        {/* Removed Nav Links as requested */}
                    </div>
                </div>
            </div>
        </header>
    );
}
