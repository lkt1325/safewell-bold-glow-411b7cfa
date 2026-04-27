import { motion } from "framer-motion";
import { ShieldCheck, Award, Users } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";

const features = [
  { icon: ShieldCheck, title: "Trust", desc: "Friendly, licensed guards you can rely on every day." },
  { icon: Award, title: "Experience", desc: "More than ten years of looking after homes, offices, and events." },
  { icon: Users, title: "Care", desc: "Polite, attentive watchmen who treat your space like their own." },
];

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-2xl bg-primary/20 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={aboutImg}
              alt="Safewell trained security team"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-primary/40 bg-background/80 p-5 backdrop-blur md:block">
            <div className="font-display text-4xl font-bold text-primary">10+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Years of Service</div>
          </div>
        </motion.div>

        <div>
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" /> About Us
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
              Watchful, friendly, <span className="text-gradient-gold">always there.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Safewell Security Services provides trained, uniformed security guards and watchmen for homes, offices, shops, and events. We focus on a calm, respectful presence — the kind of quiet, dependable team you’re glad to see at the gate.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.15 + i * 0.07}>
                <div className="card-tilt rounded-xl border border-border bg-surface/60 p-5">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary">
                    <f.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-md border border-primary/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary btn-glow hover:bg-primary hover:text-primary-foreground"
            >
              Learn More About Us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
