import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    label: "Windows",
    gradient: "from-sky-900/80 to-primary/60",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    label: "Doors",
    gradient: "from-slate-700/80 to-slate-900/60",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    label: "Railing",
    gradient: "from-primary/70 to-accent/50",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    label: "Detail",
    gradient: "from-amber-800/40 to-orange-900/30",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80",
  },
  {
    label: "Install",
    gradient: "from-emerald-800/50 to-teal-900/40",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    label: "Finish",
    gradient: "from-primary/50 to-sky-800/50",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const tile = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="gallery" className="py-20 sm:py-28 relative overflow-hidden bg-primary">
      <div className="gradient-orb-bottom absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.header
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white mb-3 inline-block border-b border-white/30 pb-2">
            Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-2">
            Our Work
          </h2>
        </motion.header>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {items.map(({ label, gradient, image }) => (
            <motion.div
              key={label}
              variants={tile}
              className="group relative aspect-[4/3] rounded-2xl border border-border overflow-hidden bg-muted/50 hover:border-primary/40 hover:shadow-soft transition-all duration-300"
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 transition-opacity duration-300 group-hover:from-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="font-display text-lg sm:text-xl font-semibold text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {label}
                </span>
                <span className="text-xs font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='none'/%3E%3Cpath d='M16 0v32M0 16h32' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
