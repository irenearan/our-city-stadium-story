import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import eventsImg from "@/assets/betis-events.jpg";

const uses = [
  "International events",
  "Concerts & cultural programming",
  "Premium hospitality",
  "Corporate activations",
  "Year-round economic impact",
];

const SectionUses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="section-5"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={eventsImg}
          alt="Concert event inside the stadium"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
        >
          Chapter VI — Uses & Opportunities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
        >
          More Than
          <br />
          <span className="text-gradient-gold">Matchday.</span>
        </motion.h2>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {uses.map((use, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
              className="rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-light text-foreground/90 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10"
            >
              {use}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 max-w-lg text-lg font-light leading-relaxed text-muted-foreground"
        >
          A stadium that generates value{" "}
          <span className="font-medium text-foreground">every single day.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default SectionUses;
