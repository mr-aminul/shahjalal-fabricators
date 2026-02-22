import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Select as SelectComponent } from "@/components/ui/select";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();
    const subject = encodeURIComponent("Quote Request - Shah Jalal Fabricators");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService: ${service || "Not selected"}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:fazle1603@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="gradient-orb absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.header
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3 inline-block border-b border-primary/30 pb-2">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
            Request a Quote
          </h2>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <SelectComponent id="service" name="service">
                <option value="">Select...</option>
                <option value="windows">Aluminium Windows</option>
                <option value="doors">Doors & Partitions</option>
                <option value="railing">Railing & Balustrades</option>
                <option value="custom">Custom Fabrication</option>
              </SelectComponent>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Describe your project or ask for a visit..."
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full rounded-xl"
            >
              {submitted ? "Opening email…" : "Send Request"}
            </Button>
          </motion.form>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="p-6 hover:shadow-soft transition-shadow duration-300">
              <CardHeader className="p-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Visit or Call
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 space-y-3">
                <a
                  href="https://www.google.com/maps/place/Shah+Jalal+Aluminium+Fabricators/@23.7837258,90.3989393,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c76c87dac2bf:0x9a199cfbc87a3151!8m2!3d23.7837258!4d90.3989393!16s%2Fg%2F11g02cs9cl?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm leading-relaxed hover:text-primary transition-colors block"
                >
                  New Airport Road, Mohakhali — Amtoli, House 65
                  <br />
                  Dhaka, Bangladesh
                </a>
                <a
                  href="tel:+8801775757263"
                  className="flex items-center gap-2 text-primary font-medium hover:underline transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +880 1775-757263
                </a>
                <a
                  href="mailto:fazle1603@gmail.com"
                  className="flex items-center gap-2 text-primary font-medium hover:underline transition-all"
                >
                  <Mail className="w-4 h-4" />
                  fazle1603@gmail.com
                </a>
              </CardContent>
            </Card>

            <a
              href="https://wa.me/8801775757263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#25d366] text-white font-medium hover:bg-[#20bd5a] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>

            <div className="rounded-2xl border border-border overflow-hidden aspect-[16/10] bg-muted shadow-inner">
              <iframe
                title="Shah Jalal Fabricators — Dhaka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.3945!2d90.3989393!3d23.7837258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76c87dac2bf%3A0x9a199cfbc87a3151!2sShah+Jalal+Aluminium+Fabricators!5e0!3m2!1sen!2sbd"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
