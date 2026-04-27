import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safewell Security Services — Your Safety, Our Priority" },
      { name: "description", content: "Premium security agency: manned guarding, CCTV, VIP protection, event and industrial security." },
      { property: "og:title", content: "Safewell Security Services" },
      { property: "og:description", content: "Premium security solutions you can trust. 24/7 protection." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <GallerySection />
      <CtaBanner />
    </>
  );
}
