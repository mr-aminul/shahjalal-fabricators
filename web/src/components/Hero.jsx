import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/SocialIcons";
import heroImage1 from "@/assets/Gemini_Generated_Image_7mwdw87mwdw87mwd.png";
import heroImage2 from "@/assets/Gemini_Generated_Image_egf230egf230egf2.png";
import heroImage3 from "@/assets/Untitled design (3).png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const slides = [
  {
    tags: ["Custom fit", "Premium materials", "Dhaka delivery"],
    headline: ["Precision.", "Elegance.", "Built to Last."],
    description:
      "Quality with depth. Craft with precision. Our premium aluminium windows, doors and railing are made with real materials and care. Delivered across Dhaka for those who demand lasting build.",
    footer: "Free quote • Site visit available • Delivery across Dhaka",
  },
  {
    tags: ["Windows & doors", "Railing", "Installation"],
    headline: ["Aluminium that", "performs.", "Installed with care."],
    description:
      "From thermal-break windows to stair railing and partitions—we fabricate and deliver. Get a quote and we can arrange measurement, delivery and installation in Dhaka.",
    footer: "Measure • Fabricate • Deliver • Install",
  },
  {
    tags: ["Small batch", "Real materials", "No compromise"],
    headline: ["Crafted in Dhaka.", "Built for you.", "Made to last."],
    description:
      "Every piece is made to order. We use quality aluminium and finishes that stand up to the climate. Request a quote or visit us on New Airport Road, Mohakhali.",
    footer: "New Airport Road, Mohakhali • Open for visits",
  },
];

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[activeIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Full-bleed background slideshow */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url("${HERO_IMAGES[activeIndex]}")` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          />
        </AnimatePresence>
      </div>
      {/* Blue layer behind text, fades away to the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0, 48, 135, 0.88) 0%, rgba(0, 48, 135, 0.55) 45%, transparent 75%)",
        }}
        aria-hidden
      />
      {/* Subtle bokeh dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-white/20 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-white/15 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/2 w-1 h-1 rounded-full bg-white/25" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: "0.3s" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[calc(100vh-8rem)]">
          {/* Text content – centered band, left-aligned type */}
          <div className="relative w-full max-w-2xl min-h-[320px] sm:min-h-[380px] text-left">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                className="absolute inset-0 top-0 left-0 right-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="relative"
                >
                  <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
                    {slide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.15]">
                    {slide.headline.map((line, i) => (
                      <motion.span
                        key={i}
                        className={`block ${i === slide.headline.length - 1 ? "hero-headline-accent" : ""}`}
                        variants={item}
                      >
                        {line}
                      </motion.span>
                    ))}
                  </h1>

                  <motion.p
                    variants={item}
                    className="text-white/90 text-base sm:text-lg leading-relaxed mb-8"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div variants={item} className="flex flex-wrap gap-4 mb-8">
                    <ButtonLink
                      href="#contact"
                      size="lg"
                      className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 shadow-xl border-0"
                    >
                      Request a Quote
                    </ButtonLink>
                    <ButtonLink
                      href="https://wa.me/8801775757263"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 backdrop-blur-sm inline-flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-5 h-5 shrink-0" />
                      Chat on WhatsApp
                    </ButtonLink>
                  </motion.div>

                  <motion.p variants={item} className="text-white/70 text-sm">
                    {slide.footer}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Pagination dots – control the 3 slides */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 items-center"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
              index === activeIndex ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
