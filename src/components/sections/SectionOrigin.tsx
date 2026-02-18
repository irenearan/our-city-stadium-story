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
      className="section-dark relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={stadiumExterior} alt="Estadio Benito Villamarín" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150_20%_8%)] via-[hsl(150_20%_8%/0.85)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 h-1 rounded-full bg-primary"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Capítulo I — Origen e Identidad
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-4xl font-extrabold uppercase leading-[1.1] tracking-tight md:text-5xl lg:text-7xl"
          >
            Más que un club.
            <br />
            <span className="text-primary">Un legado vivo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-lg font-light leading-relaxed text-white/70 md:text-xl"
          >
            El Real Betis Balompié no es solo fútbol.
            <br />
            Es identidad, ciudad, pasión e historia compartida.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/50"
          >
            Durante generaciones, el Benito Villamarín ha sido el hogar de momentos inolvidables. Pero la historia no se preserva quedándose quieto.
            <br />
            <span className="mt-2 inline-block font-semibold text-white italic">Evoluciona.</span>
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
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Desliza para continuar
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionOrigin;
