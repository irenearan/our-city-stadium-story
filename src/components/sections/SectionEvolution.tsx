import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import evolutionImg from "@/assets/betis-evolution.jpg";

const SectionEvolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const lines = [
    "Football evolves.",
    "Cities evolve.",
    "Experiences evolve.",
  ];

  return (
    <section
      id="section-1"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={evolutionImg}
          alt="Stadium evolution concept"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
        >
          Chapter II — The Need to Evolve
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
        >
          Every Legacy Demands
          <br />
          <span className="text-gradient-gold">Its Next Step.</span>
        </motion.h2>

        <div className="mt-16 flex flex-col items-center gap-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.3 }}
              className="text-xl font-light text-foreground/80 md:text-2xl"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-12 max-w-xl text-base font-light leading-relaxed text-muted-foreground"
        >
          To remain a benchmark, the stadium must become more than a venue —
          <br />
          <span className="font-medium text-foreground">
            it must become a platform for the future.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default SectionEvolution;
