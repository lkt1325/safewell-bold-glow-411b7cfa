import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Safewell Security Services" },
      { name: "description", content: "A decade of disciplined, premium security operations. Meet the standard behind Safewell." },
      { property: "og:title", content: "About Safewell Security Services" },
      { property: "og:description", content: "Trained personnel. Modern surveillance. Unwavering vigilance." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={<>The standard of <span className="text-gradient-gold">vigilance</span></>}
        description="A decade of disciplined operations protecting people, property and what matters most."
      />
      <AboutSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
