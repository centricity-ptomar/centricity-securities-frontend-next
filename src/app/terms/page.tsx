import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6">Terms & Conditions</h1>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm prose prose-invert max-w-none text-gray-300">
                        <p>Welcome to OneInvest. By accessing our website, you agree to be bound by these Terms and Conditions.</p>
                        <h3 className="text-brand-primary">Use of Services</h3>
                        <p>You agree to use our services only for lawful purposes...</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
