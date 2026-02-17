import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InvestorCharterPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6">Investor Charter</h1>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm prose prose-invert max-w-none text-gray-300">
                        <p>Investor Charter for Stock Brokers and Depository Participants.</p>
                        <ul>
                            <li>Vision: To facilitate wealth creation...</li>
                            <li>Mission: To ensure protection of investors' interests...</li>
                        </ul>
                        <p>Please refer to the detailed charter documents available for download.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
