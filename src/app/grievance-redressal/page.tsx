import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GrievanceRedressal from '@/components/GrievanceRedressal';

export default function GrievanceRedressalPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-sm text-gray-300">
                        <GrievanceRedressal />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
