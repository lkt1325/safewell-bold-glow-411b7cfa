import { ClipboardList, Search, Truck, Activity } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

const steps = [
  { icon: ClipboardList, title: "Consultation", desc: "We listen, scope your needs and define objectives." },
  { icon: Search, title: "Risk Assessment", desc: "Site survey and threat analysis tailored to you." },
  { icon: Truck, title: "Deployment", desc: "Trained personnel and tech mobilized on schedule." },
  { icon: Activity, title: "Monitoring", desc: "24/7 oversight with reporting and continuous improvement." },
];

export function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title={<>Our <span className="text-gradient-gold">Process</span></>}
          description="A disciplined four-step framework that turns risk into resilience."
        />

        <div className="relative mt-16">
          {/* timeline line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent md:block" />

          <StaggerGroup className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="pulse-ring grid h-20 w-20 place-items-center rounded-full border border-primary/40 bg-background text-primary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <s.icon className="h-7 w-7" strokeWidth={2.2} />
                    </span>
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide">{s.title}</h3>
                  <p className="mt-2 max-w-[16rem] text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
