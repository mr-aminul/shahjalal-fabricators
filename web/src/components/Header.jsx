import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { ButtonLink } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const check = () => {
      const rect = hero.getBoundingClientRect();
      setPastHero(rect.bottom <= 0);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const brandClass = pastHero ? "text-foreground" : "text-white";
  const navLinkClass = pastHero
    ? "text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded-md"
    : "text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded-md";

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6">
      <div className="liquid-glass mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full pl-2 pr-2 sm:pl-4 sm:pr-4">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 rounded-full pl-1.5 pr-4 py-1.5 transition-colors shrink-0 hover:bg-primary"
        >
          <img
            src="/logo.png"
            alt="Shah Jalal Fabricators"
            className="h-9 w-9 object-contain"
          />
          <span className={`font-display text-lg font-semibold transition-colors duration-200 ${brandClass} group-hover:text-primary-foreground`}>
            Shah Jalal
          </span>
          <span className={`text-xs font-medium uppercase tracking-[0.2em] -ml-0.5 transition-colors duration-200 ${brandClass} group-hover:text-primary-foreground`}>
            Fabricators
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClass}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="#contact"
            size="default"
            className="rounded-full px-5 font-medium shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get a Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`md:hidden p-2.5 rounded-full transition-colors shrink-0 ${pastHero ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="py-3 px-4 rounded-xl text-foreground hover:bg-muted font-medium transition-colors"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/8801775757263"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-primary hover:bg-muted font-medium inline-flex items-center gap-2"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                WhatsApp
              </motion.a>
              <motion.a
                href="#contact"
                className="py-3 px-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-center"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.04 }}
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
