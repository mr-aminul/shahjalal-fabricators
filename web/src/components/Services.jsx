import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Square, DoorOpen, Ruler, Wrench } from "lucide-react";

const services = [
  {
    icon: Square,
    title: "Aluminium Windows",
    description:
      "Custom windows for homes and commercial spaces. Thermal break, powder-coated finishes, precise fit.",
  },
  {
    icon: DoorOpen,
    title: "Doors & Partitions",
    description:
      "Sliding, hinged and partition systems. Security, style and durability in one.",
  },
  {
    icon: Ruler,
    title: "Railing & Balustrades",
    description:
      "Stair and balcony railing in aluminium. Clean lines, compliant and long-lasting.",
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description:
      "Bespoke solutions for unique projects. From design to install, we deliver.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 sm:py-28 bg-card border-y border-border relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 gradient-orb pointer-events-none" />
      <div className="absolute inset-0 mesh-grid pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.header
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3 inline-block border-b border-primary/30 pb-2">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
            Services
          </h2>
        </motion.header>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={cardItem}>
              <Card className="group p-6 flex flex-col h-full hover:bg-primary hover:shadow-soft hover:-translate-y-1 hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-lg group-hover:text-primary-foreground transition-colors duration-300">{title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2 flex-1">
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed transition-colors duration-300">{description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
