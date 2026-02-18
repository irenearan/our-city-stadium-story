import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import stadiumExterior from "@/assets/stadium-exterior.jpg";

const SectionOrigin = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="section-0"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={stadiumExterior}
          alt="Estadio Benito Villamarín"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 h-[2px] bg-primary"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
          >
            Capítulo I — Origen e Identidad
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-5xl leading-[1.1] md:text-6xl lg:text-7xl"
          >
            Más que un club.
            <br />
            <span className="text-gradient-green">Un legado vivo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
          >
            El Real Betis Balompié no es solo fútbol.
            <br />
            Es identidad, ciudad, pasión e historia compartida.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground/70"
          >
            Durante generaciones, el Benito Villamarín ha sido el hogar de momentos
            inolvidables. Pero la historia no se preserva quedándose quieto.
            <br />
            <span className="mt-2 inline-block font-medium text-foreground italic">
              Evoluciona.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-px bg-primary/40"
            />
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Desliza para continuar
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionOrigin;
