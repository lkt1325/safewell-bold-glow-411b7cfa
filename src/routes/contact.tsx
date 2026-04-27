import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Safewell Security Services" },
      { name: "description", content: "Talk to a Safewell security strategist. Tailored quotes within one business day." },
      { property: "og:title", content: "Contact Safewell" },
      { property: "og:description", content: "Get a security quote — response within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient-gold">talk security</span></>}
        description="Tell us about your operation. We'll respond with a tailored plan within one business day."
      />
      <ContactSection />
    </>
  );
}
