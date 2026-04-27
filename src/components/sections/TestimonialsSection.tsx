import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const reviews = [
  { name: "Rajesh Sharma", role: "Facility Manager", text: "Safewell Security Services has been handling our office security for over a year now. Their guards are punctual, well-trained, and very professional. We've seen a noticeable improvement in overall safety." },
  { name: "Priya Reddy", role: "Event Organizer", text: "We hired Safewell for our corporate event, and their team did an excellent job. Everything was well-managed, and the staff was disciplined and alert throughout." },
  { name: "Amit Verma", role: "Residential Society Secretary", text: "Their security personnel are reliable and respectful. Residents feel much safer now, and the team handles entry/exit very efficiently." },
  { name: "Sandeep Gupta", role: "Warehouse Owner", text: "Very dependable service. The guards are attentive and take their responsibilities seriously. I highly recommend Safewell Security Services." },
  { name: "Neha Singh", role: "Business Owner", text: "Professional and responsive team. From onboarding to daily operations, everything has been smooth and well-managed." },
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
