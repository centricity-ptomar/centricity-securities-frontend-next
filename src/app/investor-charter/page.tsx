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
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="/Investor%20Charter.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-black bg-brand-primary hover:bg-brand-primary/90 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                Investor Charter for Stock Brokers
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
