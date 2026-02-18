import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import interiorImg from "@/assets/betis-interior.jpg";

const purposes = [
  { icon: "🎯", text: "Enhance fan experience" },
  { icon: "📈", text: "Expand commercial opportunities" },
  { icon: "🌍", text: "Elevate international positioning" },
  { icon: "🤝", text: "Strengthen institutional relationships" },
];

const SectionProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="section-3"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={interiorImg}
          alt="Stadium interior render"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/75 to-background/50" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2 lg:px-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
          >
            Chapter IV — The Project
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl"
          >
            Architecture
            <br />
            <span className="text-gradient-gold">With Purpose.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg"
          >
            Every line has meaning.
            <br />
            Every space has intention.
          </motion.p>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
          >
            Designed to
          </motion.p>

          {purposes.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
              className="flex items-center gap-4 border-l-2 border-primary/30 py-3 pl-6 transition-colors duration-300 hover:border-primary"
            >
              <span className="text-2xl">{p.icon}</span>
              <span className="text-base font-light text-foreground/90 md:text-lg">
                {p.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
