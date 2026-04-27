import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const reviews = [
  { name: "Marcus L.", role: "Facility Director", text: "Safewell transformed our site security overnight. Professional, prompt, and proactive." },
  { name: "Aisha R.", role: "Event Producer", text: "Flawless crowd management at a 5,000-person event. The team was sharp and seamless." },
  { name: "David K.", role: "Estate Manager", text: "Discreet, reliable, and always one step ahead. We trust them with our most valuable assets." },
  { name: "Priya S.", role: "Operations Lead", text: "Their command center response time is unmatched. True 24/7 coverage." },
  { name: "Jonas H.", role: "Plant Manager", text: "Industrial-grade protection with the discipline of a military unit. Highly recommended." },
];

export function TestimonialsSection() {
  // duplicate for seamless marquee
  const items = [...reviews, ...reviews];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What Our <span className="text-gradient-gold">Clients Say</span></>}
          description="Trusted by operations leaders, event producers, and private clients across industries."
        />
      </div>

      <div
        className="group mt-16 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-6 px-6 group-hover:[animation-play-state:paused]">
          {items.map((r, i) => (
            <article
              key={i}
              className="card-tilt w-[340px] shrink-0 rounded-2xl border border-border bg-surface/70 p-6 md:w-[400px]"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-primary" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold">{r.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
