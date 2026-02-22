import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

const pageLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const supportLinks = [
  { href: "#contact", label: "Request a Quote" },
  { href: "#services", label: "Our Services" },
  { href: "#contact", label: "Site Visit" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/people/Shah-Jalal-Fabricators/61583625806962/",
    label: "Facebook",
    external: true,
    icon: FacebookIcon,
  },
  {
    href: "https://wa.me/8801775757263",
    label: "WhatsApp",
    external: true,
    icon: WhatsAppIcon,
  },
];

export function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email?.value?.trim();
    if (email) {
      const subject = encodeURIComponent("Newsletter signup - Shah Jalal Fabricators");
      const body = encodeURIComponent(`Please add me to your updates.\nEmail: ${email}`);
      window.location.href = `mailto:fazle1603@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <footer className="border-t border-border bg-foreground/5 relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-10 pointer-events-none" />

      {/* Newsletter / Stay in the loop */}
      <section className="relative border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2">
                Stay in the loop
              </h3>
              <p className="text-sm text-muted-foreground">
                Get updates on new designs, offers, and fabrication tips. No spam.
              </p>
            </motion.div>
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full lg:w-auto lg:min-w-[320px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full h-11 pl-10 pr-4 rounded-full border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 h-11 px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border/50">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Follow us
            </span>
            {socialLinks.map(({ href, label, external, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium inline-flex items-center gap-2"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main footer grid */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col gap-1 mb-3">
              <span className="font-display text-lg font-semibold text-foreground">Shah Jalal</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                Fabricators
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium aluminium craftsmanship in Dhaka. Windows, doors, railing & custom fabrication.
            </p>
          </motion.div>

          {/* Pages */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {pageLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:fazle1603@gmail.com"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  fazle1603@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Shah-Jalal-Fabricators/61583625806962/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <FacebookIcon className="h-3.5 w-3.5 shrink-0" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801775757263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Shah Jalal Fabricators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
