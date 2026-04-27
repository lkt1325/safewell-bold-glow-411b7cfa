import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link to="/" className="group flex items-center">
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-[0.18em] text-foreground sm:text-base">SAFEWELL</span>
            <span className="font-display text-[9px] font-semibold tracking-[0.28em] text-primary sm:text-[10px] sm:tracking-[0.32em]">SECURITY SERVICES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow"
        >
          Get a Quote
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur"
          >
            <div className="container-x flex flex-col py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
