import HeroSection from '@/components/HeroSection';
import CompanyInfo from '@/components/CompanyInfo';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <CompanyInfo />
      <ContactSection />
    </main>
  );
}
