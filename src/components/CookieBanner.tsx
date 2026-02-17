"use client";
import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface CookieConsent {
    type: string;
    timestamp: string;
}

export default function CookieBanner() {
    const [consent, setConsent] = useLocalStorage<CookieConsent | null>('centricity_cookie_consent', null);
    const [visible, setVisible] = useState(false);
    const [showCustomize, setShowCustomize] = useState(false);

    useEffect(() => {
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [consent]);

    const handleAccept = useCallback((type: string) => {
        setConsent({ type, timestamp: new Date().toISOString() });
        setVisible(false);
    }, [setConsent]);

    if (consent || !visible) return null;

    return (
        <div className={`cookie-banner ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className="flex-1">
                        <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">We value your privacy</h3>
                        <p className="text-sm text-gray-600">
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and
                            analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setShowCustomize(!showCustomize)}
                            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Customize
                        </button>
                        <button
                            onClick={() => handleAccept('essential')}
                            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={() => handleAccept('all')}
                            className="px-4 py-2 text-sm font-medium text-white bg-brand-teal rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            Accept All
                        </button>
                    </div>
                </div>

                {/* Customize Panel */}
                {showCustomize && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <CookieToggle label="Essential" description="Always active" checked disabled />
                            <CookieToggle label="Analytics" description="Optional" defaultChecked />
                            <CookieToggle label="Marketing" description="Optional" />
                            <CookieToggle label="Preferences" description="Optional" />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => handleAccept('custom')}
                                className="px-4 py-2 text-sm font-medium text-white bg-brand-teal rounded-lg hover:bg-teal-700 transition-colors"
                            >
                                Save Preferences
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function CookieToggle({
    label,
    description,
    checked,
    defaultChecked,
    disabled,
}: {
    label: string;
    description: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
}) {
    return (
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <div>
                <p className="text-sm font-medium text-gray-800">{label}</p>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
            {disabled ? (
                <div className="w-10 h-6 bg-brand-teal rounded-full flex items-center justify-end p-0.5 cursor-not-allowed">
                    <div className="w-5 h-5 bg-white rounded-full shadow" />
                </div>
            ) : (
                <label className="relative inline-block w-10 h-6 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={checked || defaultChecked}
                    />
                    <div className="w-10 h-6 bg-gray-300 rounded-full peer-checked:bg-brand-teal transition-colors" />
                    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-4 transition-transform" />
                </label>
            )}
        </div>
    );
}
