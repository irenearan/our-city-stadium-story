import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionEvolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const lines = [
    "El fútbol evoluciona.",
    "Las ciudades evolucionan.",
    "Las experiencias evolucionan.",
  ];

  return (
    <section
      id="section-1"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary"
        >
          Capítulo II — La necesidad de evolucionar
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl"
        >
          Cada legado exige
          <br />
          <span className="text-primary">su siguiente paso.</span>
        </motion.h2>

        <div className="mt-16 flex flex-col items-center gap-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.3 }}
              className="text-xl font-light text-foreground/70 md:text-2xl"
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
          Para seguir siendo referencia, el estadio debe convertirse en algo más que un recinto —
          <br />
          <span className="font-semibold text-foreground">
            debe convertirse en una plataforma para el futuro.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default SectionEvolution;
