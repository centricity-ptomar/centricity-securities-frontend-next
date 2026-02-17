import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6">About Us</h1>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm prose prose-invert max-w-none text-gray-300">
                        <p>Welcome to OneInvest by Centricity Securities Private Limited.</p>
                        <p>We are dedicated to bridging the gap among Investors, Wealth Managers, and Asset Managers through technology and transparency.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
