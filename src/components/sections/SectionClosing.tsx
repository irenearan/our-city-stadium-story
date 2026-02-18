import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import stadiumNight from "@/assets/stadium-night.jpg";

const SectionClosing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const words = [
    "Esto no es solo construcción.",
    "Es continuidad.",
    "Un nuevo capítulo.",
    "Un nuevo símbolo.",
    "Un nuevo escenario para las generaciones venideras.",
  ];

  return (
    <section
      id="section-6"
      ref={ref}
      className="section-dark relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={stadiumNight} alt="Nuevo Benito Villamarín de noche" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-[hsl(150_20%_8%/0.8)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary"
        >
          Capítulo VII
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-white md:text-5xl lg:text-8xl"
        >
          El futuro
          <br />
          <span className="text-primary">tiene hogar.</span>
        </motion.h2>

        <div className="mt-16 flex flex-col items-center gap-3">
          {words.map((word, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.25 }}
              className="text-lg font-light text-white/60 md:text-xl"
            >
              {word}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16 font-display text-xl font-bold italic text-accent md:text-2xl"
        >
          Bienvenido al Nuevo Benito Villamarín.
        </motion.p>

        <motion.a
          href="#section-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="btn-betis-white mt-12"
        >
          Únete a la visión
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 3 }}
          className="mt-32 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
        >
          © Real Betis Balompié — Nuevo Estadio Benito Villamarín
        </motion.div>
      </div>
    </section>
  );
};

export default SectionClosing;
