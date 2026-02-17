import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Disclaimer from '@/components/Disclaimer';

export default function DisclaimerPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6">Disclaimer</h1>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm prose prose-invert max-w-none text-gray-300">
                        <Disclaimer />
                        <p className="mt-4">
                            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
