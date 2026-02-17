import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogsPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6">Blogs & Insights</h1>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm text-gray-300">
                        <p>Latest updates and industry insights coming soon.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
