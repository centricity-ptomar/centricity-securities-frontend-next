"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '../hooks/useScrollPosition';
import logoImg from '../../public/one-invest-logo-modified.png';

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
                            <Image
                                src={logoImg}
                                alt="OneInvest Logo"
                                width={160}
                                height={40}
                                className="h-8 w-auto md:h-10 drop-shadow-md"
                                priority
                            />
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
