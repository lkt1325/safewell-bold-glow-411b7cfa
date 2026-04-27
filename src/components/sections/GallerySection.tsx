import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import gTeam from "@/assets/about-team.jpg";
import gHero from "@/assets/hero-guard.jpg";

const images = [
  { src: g1, alt: "CCTV control room", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "VIP protection detail", span: "" },
  { src: g3, alt: "Event security officer", span: "" },
  { src: g4, alt: "Industrial perimeter patrol", span: "md:col-span-2" },
  { src: gTeam, alt: "Tactical team formation", span: "" },
  { src: gHero, alt: "Officer on duty", span: "" },
];

export function GallerySection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="In The Field"
          title={<>Our <span className="text-gradient-gold">Operations</span></>}
          description="A glimpse into the people, technology and missions behind Safewell."
        />

        <StaggerGroup
          stagger={0.07}
          className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[180px]"
        >
          {images.map((img, i) => (
            <StaggerItem key={i} className={img.span}>
              <button
                onClick={() => setActive(img.src)}
                className="group relative h-full w-full overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs font-bold uppercase tracking-widest text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-6 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground hover:border-primary hover:text-primary"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={active}
              alt="Gallery preview"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[92vw] rounded-xl border border-border object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
