// app/page.tsx
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import VisionSection from '@/components/VisionSection';
import ServicesSection from '@/components/ServicesSection';
import MediaSection from '@/components/MediaSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import PasteurSection from '@/components/PasteurSection';


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <VisionSection />
      <MediaSection />
      <ServicesSection />
      <PasteurSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}