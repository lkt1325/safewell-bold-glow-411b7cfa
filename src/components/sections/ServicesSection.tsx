import { Shield, Calendar, Camera, UserCheck, Factory, Home, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

const services = [
  { icon: Shield, title: "Manned Guarding", desc: "Trained, uniformed officers providing visible deterrence and rapid response." },
  { icon: Calendar, title: "Event Security", desc: "Crowd management, access control and VIP escort for events of any scale." },
  { icon: Camera, title: "CCTV Surveillance", desc: "24/7 monitored surveillance with AI analytics and incident playback." },
  { icon: UserCheck, title: "VIP Protection", desc: "Discreet close-protection details for executives and high-profile clients." },
  { icon: Factory, title: "Industrial Security", desc: "Perimeter, access and asset protection for plants and warehouses." },
  { icon: Home, title: "Residential Security", desc: "Estate patrols, smart-home monitoring and resident vetting." },
];

export function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Our <span className="text-gradient-gold">Services</span></>}
          description="A full spectrum of physical and electronic security capabilities — engineered around your risk profile."
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group card-tilt relative h-full overflow-hidden rounded-2xl border border-border bg-surface/70 p-7">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-primary/15 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[var(--shadow-glow-sm)]">
                  <s.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
