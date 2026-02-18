import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import visionImg from "@/assets/betis-vision.jpg";

const pillars = [
  { label: "Open", desc: "Seamlessly connected to the city fabric" },
  { label: "Sustainable", desc: "Net-zero ambition from day one" },
  { label: "Integrated", desc: "A living part of Seville's urban life" },
  { label: "365 Days", desc: "Designed for year-round activation" },
];

const SectionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="section-2"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={visionImg}
          alt="New stadium vision"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
        >
          Chapter III — The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
        >
          A New Landmark
          <br />
          <span className="text-gradient-green">for Seville.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg"
        >
          The new Benito Villamarín will redefine what a stadium can be.
          <br />
          This is not just a stadium.{" "}
          <span className="font-medium text-foreground italic">
            It is an ecosystem.
          </span>
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
              className="border-t border-primary/30 pt-6"
            >
              <p className="font-display text-2xl text-foreground md:text-3xl">
                {p.label}
              </p>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionVision;
