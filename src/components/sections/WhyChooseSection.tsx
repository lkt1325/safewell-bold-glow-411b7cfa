import { ShieldCheck, UserCheck, Building2, Zap, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import whyImg from "@/assets/why-choose.webp";

const points = [
  { icon: UserCheck, text: "Professionally trained and verified guards" },
  { icon: ShieldCheck, text: "Strict discipline and duty accountability" },
  { icon: Building2, text: "Reliable service for residential, commercial, and events" },
  { icon: Zap, text: "Quick response and on-ground supervision" },
  { icon: Settings2, text: "Customized security planning based on client needs" },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-surface/40" />
      <div className="stripe-divider absolute inset-x-0 top-0" />
      <div className="stripe-divider absolute inset-x-0 bottom-0" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image — slide in from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/15 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40">
            <img
              src={whyImg}
              alt="Safewell uniformed security guard on duty at a client site"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Content — fade in from right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> Why Choose Us
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
            Why Businesses Trust <span className="text-gradient-gold">Safewell Security Services</span>
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Safewell Security Services delivers dependable, well-trained security personnel backed by structured processes and real-world experience. We focus on discipline, reliability, and consistent service to ensure complete peace of mind for our clients.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <Reveal key={p.text} delay={0.1 + i * 0.08}>
                <li className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_10px_30px_-10px_rgba(255,215,0,0.35)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="text-sm font-medium md:text-base">{p.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
