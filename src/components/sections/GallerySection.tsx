import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import g1 from "@/assets/gallery/g1.webp";
import g2 from "@/assets/gallery/g2.webp";
import g3 from "@/assets/gallery/g3.webp";
import g4 from "@/assets/gallery/g4.webp";
import g5 from "@/assets/gallery/g5.webp";
import g6 from "@/assets/gallery/g6.webp";
import g7 from "@/assets/gallery/g7.webp";
import g8 from "@/assets/gallery/g8.webp";
import g9 from "@/assets/gallery/g9.webp";
import g10 from "@/assets/gallery/g10.webp";

const slides = [
  { src: g1, alt: "Safewell guard on duty at client gate" },
  { src: g2, alt: "Warehouse perimeter watchman" },
  { src: g3, alt: "Site security at residential project" },
  { src: g4, alt: "Construction site guard posted" },
  { src: g5, alt: "Reception and front desk security" },
  { src: g6, alt: "Team of guards at industrial site" },
  { src: g7, alt: "Safewell guard team formation" },
  { src: g8, alt: "Two guards posted at facility entrance" },
  { src: g9, alt: "Four guards in uniform on patrol" },
  { src: g10, alt: "Guard posted at premium villa project" },
];

const AUTOPLAY_MS = 4000;

export function GallerySection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, go]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart == null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    setTouchStart(null);
  };

  const current = slides[index];

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="In The Field"
          title={<>Our <span className="text-gradient-gold">Operations</span></>}
          description="Real moments from our guards on duty across homes, offices, and worksites."
        />
      </div>

      <div
        className="relative mt-12 w-full select-none overflow-hidden border-y border-border bg-black"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
      >
        <div className="relative h-[45vh] w-full sm:h-[55vh] md:h-[75vh]">
          {/* Blurred background for portrait fill */}
          <AnimatePresence mode="sync">
            <motion.img
              key={`bg-${index}`}
              src={current.src}
              alt=""
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
            />
          </AnimatePresence>

          {/* Foreground slide */}
          <AnimatePresence mode="sync">
            <motion.img
              key={`img-${index}`}
              src={current.src}
              alt={current.alt}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 m-auto h-full w-full object-contain md:object-cover"
              style={{ objectPosition: "center" }}
            />
          </AnimatePresence>

          {/* Dark gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

          {/* Text overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:pb-20">
            <div className="container-x">
              <motion.p
                key={`label-${index}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary"
              >
                Safewell Security Services
              </motion.p>
              <motion.h3
                key={`title-${index}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-2 max-w-2xl font-display text-2xl font-bold text-white md:text-4xl"
              >
                Professional Security Solutions
              </motion.h3>
            </div>
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="group absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-all hover:border-primary hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] md:left-6 md:h-14 md:w-14"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => go(1)}
            className="group absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-all hover:border-primary hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] md:right-6 md:h-14 md:w-14"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
