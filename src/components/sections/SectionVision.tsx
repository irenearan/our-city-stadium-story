import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import stadiumInteriorFans from "@/assets/stadium-interior-fans.jpg";

const pillars = [
  { label: "Abierto", desc: "Integrado en el tejido urbano de la ciudad" },
  { label: "Sostenible", desc: "Ambición de huella cero desde el primer día" },
  { label: "Integrado", desc: "Una parte viva de la vida urbana de Sevilla" },
  { label: "365 Días", desc: "Diseñado para activación durante todo el año" },
];

const SectionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="section-2"
      ref={ref}
      className="section-green relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={stadiumInteriorFans} alt="Vista interior del estadio" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-[hsl(152_100%_25%/0.85)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-white/70"
        >
          Capítulo III — La Visión
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-white md:text-5xl lg:text-7xl"
        >
          Un nuevo hito
          <br />
          <span className="text-gradient-gold">para Sevilla.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg"
        >
          El nuevo Benito Villamarín redefinirá lo que un estadio puede ser.
          <br />
          Esto no es solo un estadio.{" "}
          <span className="font-semibold text-white italic">Es un ecosistema.</span>
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
              className="border-t border-white/20 pt-6"
            >
              <p className="font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                {p.label}
              </p>
              <p className="mt-2 text-sm font-light text-white/60">
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
