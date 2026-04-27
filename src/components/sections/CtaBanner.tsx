import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-surface to-background p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">Ready when you are</p>
                <h3 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
                  Secure your operation. <span className="text-gradient-gold">Today.</span>
                </h3>
                <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
                  Talk to a security strategist. Get a tailored plan and quote within 24 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
