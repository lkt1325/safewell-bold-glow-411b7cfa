import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Safewell Security Services" },
      { name: "description", content: "Manned guarding, CCTV surveillance, VIP protection, event, industrial and residential security." },
      { property: "og:title", content: "Safewell Services" },
      { property: "og:description", content: "Full-spectrum physical and electronic security." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Tactical <span className="text-gradient-gold">capabilities</span></>}
        description="A complete portfolio of physical and electronic security — engineered around your risk."
      />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <CtaBanner />
    </>
  );
}
