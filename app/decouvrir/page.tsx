// app/decouvrir/page.tsx
"use client";

import ActivitesSection from "@/components/decouvrir/ActivitesSection";
import CultesSection from "@/components/decouvrir/CultesSection";
import HeroSection from "@/components/decouvrir/HeroSection";
import MinisteresSection from "@/components/decouvrir/MinisteresSection";
import RejoindreSection from "@/components/decouvrir/RejoindreSection";
import TemoignagesSection from "@/components/decouvrir/TemoignagesSection";
import VieEgliseSection from "@/components/decouvrir/VieEgliseSection";

export default function DecouvrirPage() {
  return (
    <main className="">
      {/* HERO SECTION */}
      <HeroSection />
      
      {/* NOS CULTES */}
      <CultesSection />
      
      {/* MINISTÈRES */}
      <MinisteresSection />
      
      {/* VIE DE L'ÉGLISE */}
      <VieEgliseSection />
      
      {/* ACTIVITÉS */}
      <ActivitesSection />
      
      {/* REJOINDRE */}
      <RejoindreSection />
      
      {/* TÉMOIGNAGES */}
      <TemoignagesSection />
    </main>
  );
}