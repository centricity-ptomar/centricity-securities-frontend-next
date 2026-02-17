import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-1 bg-black pt-20">
                {/* ContactSection might need its own internal dark theme update, assuming it uses globals or accepts transparent bg */}
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
