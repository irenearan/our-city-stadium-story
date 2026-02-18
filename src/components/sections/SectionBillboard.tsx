import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import stadiumExterior from "@/assets/stadium-exterior.jpg";

const SectionBillboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={ref}
      id="section-billboard"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-0">
        {/* Left — Text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col justify-center"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 h-1 rounded-full bg-primary"
          />

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display text-[3.2rem] font-extrabold uppercase leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Nuevo Estadio
            <br />
            <span className="text-primary">Benito Villamarín</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-5 max-w-md font-body text-base font-medium leading-relaxed text-foreground/80 md:text-lg"
          >
            Un nuevo icono para Sevilla.
            <br />
            Una nueva etapa para el Real Betis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-5 max-w-md space-y-0.5 font-body text-sm font-normal leading-relaxed text-muted-foreground"
          >
            <p>Más que una transformación arquitectónica.</p>
            <p>Una declaración de ambición.</p>
            <p>Un proyecto de ciudad.</p>
            <p>Un legado para las próximas generaciones.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#section-0" className="btn-betis-primary">
              Descubrir el proyecto
            </a>
            <a href="#section-5" className="btn-betis-outline">
              Explorar oportunidades
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex items-center justify-center overflow-hidden rounded-xl shadow-2xl"
          style={{ minHeight: "400px" }}
        >
          <motion.img
            src={stadiumExterior}
            alt="Render exterior del Nuevo Estadio Benito Villamarín"
            className="h-full w-full object-cover"
            style={{ scale: imgScale, y: imgY, minHeight: "400px", maxHeight: "560px" }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-7 w-px bg-primary"
        />
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default SectionBillboard;
