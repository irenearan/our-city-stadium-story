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
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={stadiumNight}
          alt="Nuevo Benito Villamarín de noche"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
        >
          Capítulo VII
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl leading-[1.1] md:text-6xl lg:text-8xl"
        >
          El futuro
          <br />
          <span className="text-gradient-green">tiene hogar.</span>
        </motion.h2>

        <div className="mt-16 flex flex-col items-center gap-3">
          {words.map((word, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.25 }}
              className="text-lg font-light text-foreground/70 md:text-xl"
            >
              {word}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16 font-display text-2xl italic text-accent md:text-3xl"
        >
          Bienvenido al Nuevo Benito Villamarín.
        </motion.p>

        <motion.a
          href="#section-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mt-12 border border-primary/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Únete a la visión
        </motion.a>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 3 }}
          className="mt-32 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40"
        >
          © Real Betis Balompié — Nuevo Estadio Benito Villamarín
        </motion.div>
      </div>
    </section>
  );
};

export default SectionClosing;
