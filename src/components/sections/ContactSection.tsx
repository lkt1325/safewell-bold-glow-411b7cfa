import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title={<>Get in <span className="text-gradient-gold">Touch</span></>}
          description="Tell us about your security needs. A strategist will respond within one business day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-surface/70 p-7 md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" type="text" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <div className="mt-5">
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="block w-full resize-none rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[var(--shadow-glow-sm)]"
                  placeholder="Tell us about your needs…"
                />
              </div>

              <button
                type="submit"
                disabled={loading || submitted}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message Sent
                  </>
                ) : loading ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <div className="space-y-5">
            {[
              { icon: Phone, title: "Phone", text: "+1 (555) 010-2030" },
              { icon: Mail, title: "Email", text: "contact@safewell.security" },
              { icon: MapPin, title: "Location", text: "245 Tactical Ave, Suite 9, NY" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="card-tilt flex items-center gap-4 rounded-xl border border-border bg-surface/70 p-5">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-primary/15 text-primary">
                    <c.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.title}</div>
                    <div className="mt-0.5 text-base font-semibold">{c.text}</div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Safewell location map"
                  src="https://www.google.com/maps?q=Manhattan,New+York&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  style={{ border: 0, filter: "grayscale(0.8) invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="block w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[var(--shadow-glow-sm)]"
        placeholder={label}
      />
    </div>
  );
}
