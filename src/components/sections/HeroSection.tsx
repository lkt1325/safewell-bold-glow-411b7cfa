import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { useRef } from "react";
import logo from "@/assets/safewell-logo.png";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-screen overflow-hidden">
      {/* Ambient gradient backdrop (replaces person image) */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 75% 45%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </motion.div>

      {/* Animated grid lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,215,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />

      <motion.div
        style={{ opacity }}
        className="container-x grid min-h-screen items-center gap-12 pt-28 pb-24 lg:grid-cols-[1.05fr_1fr]"
      >
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary"
          >
            <ShieldCheck className="h-3.5 w-3.5" /> Licensed · Bonded · 24/7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          >
            Your Safety,
            <br />
            <span className="text-gradient-gold">Our Priority.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Professional security solutions you can trust. Trained personnel, advanced surveillance, and tactical response — built for the moments that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              { v: "10+", l: "Years" },
              { v: "1000+", l: "Guards" },
              { v: "24/7", l: "Response" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo showcase (replaces the person image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
        >
          {/* Concentric gradient rings */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_40%,transparent)_0%,transparent_55%)] blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            className="absolute inset-6 rounded-full border border-dashed border-primary/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="absolute inset-16 rounded-full border border-primary/20"
          />
          <div className="absolute inset-24 rounded-full bg-[conic-gradient(from_180deg,transparent,color-mix(in_oklab,var(--primary)_25%,transparent),transparent)] opacity-70 blur-2xl" />

          <motion.img
            src={logo}
            alt="Safewell Security Services emblem"
            width={1920}
            height={1080}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="relative z-10 w-[78%] object-contain drop-shadow-[0_0_45px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative h-10 w-6 rounded-full border border-border">
          <span className="scroll-indicator-dot absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary" />
        </div>
        <ChevronDown className="h-3 w-3" />
      </motion.div>
    </section>
  );
}
