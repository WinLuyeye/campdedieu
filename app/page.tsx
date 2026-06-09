// app/page.tsx
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import VisionSection from '@/components/VisionSection';
import ServicesSection from '@/components/ServicesSection';
import MediaSection from '@/components/MediaSection';
import TestimoniesSection from '@/components/TestimoniesSection';


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <MediaSection />
      <VisionSection />
      <ServicesSection />
      {/* <TestimoniesSection /> */}
    </main>
  );
}