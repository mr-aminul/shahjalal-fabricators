import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Users, Sliders, Award, Package } from "lucide-react";
import aboutDoors from "@/assets/Gemini_Generated_Image_7mwdw87mwdw87mwd.png";
import aboutAsset2 from "@/assets/Gemini_Generated_Image_egf230egf230egf2.png";

const points = [
  { strong: "Precision fabrication", text: "— Every piece measured and made to fit." },
  { strong: "Quality materials", text: "— Aluminium that stands up to Dhaka's climate." },
  { strong: "Delivery & install", text: "— We deliver and can arrange installation." },
  { strong: "Online booking", text: "— Quote and site visit at your convenience." },
];

const stats = [
  { value: "144+", label: "Satisfied Clients", highlight: false, icon: Users },
  { value: "100%", label: "Custom Made", highlight: true, icon: Sliders },
  { value: "07+", label: "Years of Experience", highlight: true, icon: Award },
  { value: "500+", label: "Projects Delivered", highlight: false, icon: Package },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};


export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-card border-y border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 mesh-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Single headline block: Why Shah Jalal Fabricators */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3 inline-block border-b border-primary/30 pb-2 w-fit"
          >
            Why Shah Jalal Fabricators
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-foreground leading-tight mb-6"
          >
            Craftsmanship, Service & Your Trusted Partner
          </motion.h2>
          <motion.p
            variants={item}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            From custom aluminium windows and doors to railing and partitions—we
            measure, fabricate and deliver across Dhaka. Every project is made to
            order with quality materials and a focus on fit and finish.
          </motion.p>
        </motion.div>

        {/* Benefits + stats in one row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14 sm:mb-16">
          <motion.ul
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {points.map(({ strong, text }, i) => (
              <motion.li
                key={strong}
                variants={item}
                className="pb-4 border-b border-border last:border-0 text-muted-foreground flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground font-medium">{strong}</strong> {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {stats.map(({ value, label, highlight, icon: Icon }) => (
              <motion.div
                key={label}
                variants={item}
                className={`rounded-xl p-5 sm:p-6 flex flex-col gap-3 ${
                  highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/80 border border-primary text-foreground"
                }`}
              >
                <Icon
                  className={`w-8 h-8 shrink-0 ${
                    highlight ? "text-white/90" : "text-primary"
                  }`}
                  aria-hidden
                />
                <span
                  className={`block font-display text-2xl sm:text-3xl font-semibold tabular-nums ${
                    highlight ? "text-white" : "text-primary"
                  }`}
                >
                  {value}
                </span>
                <span
                  className={`text-sm ${
                    highlight ? "text-white/90" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image + CTA */}
        <motion.div
          className="relative max-w-4xl mx-auto flex items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex-1 min-w-0 aspect-[4/3] sm:aspect-[5/4] max-h-[380px] rounded-2xl overflow-hidden border border-border shadow-soft">
            <img
              src={aboutDoors}
              alt="Modern aluminium sliding glass doors by Shah Jalal Fabricators"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"
              aria-hidden
            />
            <div
              className="absolute left-4 bottom-4 w-[42%] max-w-[220px] aspect-[4/3] rounded-xl border-2 border-white shadow-lg overflow-hidden bg-muted"
              aria-hidden
            >
              <img
                src={aboutAsset2}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <a
            href="#gallery"
            className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-lg hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
            aria-label="Explore our gallery"
          >
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider leading-tight text-center px-1">
              Explore
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider leading-tight text-center px-1">
              More
            </span>
            <ArrowRight className="w-4 h-4 mt-1" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
