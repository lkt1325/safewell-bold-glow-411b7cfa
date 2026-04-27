import { Check, Clock, Cpu, BadgeCheck } from "lucide-react";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const stats = [
  { v: 500, suffix: "+", label: "Clients Protected" },
  { v: 1000, suffix: "+", label: "Active Guards" },
  { v: 10, suffix: "+", label: "Years Experience" },
  { v: 24, suffix: "/7", label: "Operations" },
];

const points = [
  { icon: BadgeCheck, text: "Certified, vetted professionals" },
  { icon: Clock, text: "24/7 command center & dispatch" },
  { icon: Cpu, text: "Advanced surveillance technology" },
  { icon: Check, text: "Custom protocols per client" },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-surface/40" />
      <div className="stripe-divider absolute inset-x-0 top-0" />
      <div className="stripe-divider absolute inset-x-0 bottom-0" />

      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" /> Why Choose Us
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
              Security <span className="text-gradient-gold">redefined</span> by results.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground md:text-lg">
              We combine elite personnel with the right technology and the right protocols — measured by performance, not promises.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <Reveal key={p.text} delay={0.15 + i * 0.06}>
                <li className="flex items-center gap-3 rounded-md border border-border bg-background/50 p-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
                    <p.icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-sm font-medium md:text-base">{p.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-tilt relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-7">
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
                <div className="font-display text-5xl font-bold text-primary md:text-6xl">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
