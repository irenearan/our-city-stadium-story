import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import layersImg from "@/assets/betis-layers.jpg";

const layers = [
  { num: "01", title: "Structure", subtitle: "The Foundation", desc: "Deep foundations and steel skeleton — the bones of a modern colosseum." },
  { num: "02", title: "Seating Bowl", subtitle: "The Heart", desc: "65,000 seats engineered for maximum atmosphere and sightlines." },
  { num: "03", title: "Hospitality", subtitle: "The Opportunity", desc: "Premium suites, VIP lounges, and corporate spaces that redefine matchday." },
  { num: "04", title: "Mixed-Use", subtitle: "The Connection", desc: "Retail, dining, fitness, and community spaces woven into the fabric." },
  { num: "05", title: "Roof & Envelope", subtitle: "The Vision", desc: "A sculptural canopy that shelters, inspires, and defines the skyline." },
];

const SectionLayers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="section-4"
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={layersImg}
          alt="Stadium cross-section blueprint"
          className="h-[120%] w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </motion.div>

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
        >
          Chapter V — Construction in Layers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
        >
          Built Layer
          <br />
          <span className="text-gradient-green">by Layer.</span>
        </motion.h2>

        <div className="mt-20 space-y-0">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 + i * 0.2 }}
              className="group grid grid-cols-1 gap-4 border-t border-primary/10 py-10 md:grid-cols-12 md:gap-8"
            >
              <span className="font-body text-xs font-bold tracking-widest text-primary md:col-span-1">
                {layer.num}
              </span>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {layer.title}
                </h3>
                <p className="mt-1 text-sm font-medium italic text-accent">
                  {layer.subtitle}
                </p>
              </div>
              <p className="text-base font-light leading-relaxed text-muted-foreground md:col-span-8">
                {layer.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionLayers;
