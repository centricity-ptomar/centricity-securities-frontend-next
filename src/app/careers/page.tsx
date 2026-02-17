import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6">Careers</h1>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm prose prose-invert max-w-none text-gray-300">
                        <p>Join our team at OneInvest.</p>
                        <p>We are always looking for talented individuals to help us redefine wealth management.</p>
                        <p className="mt-4">Please contact us at <a href="mailto:careers@centricity.co.in" className="text-brand-primary hover:underline">careers@centricity.co.in</a> for current openings.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
