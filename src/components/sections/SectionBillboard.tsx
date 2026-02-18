import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import stadiumExterior from "@/assets/stadium-exterior.jpg";

const SectionBillboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={ref}
      id="section-billboard"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 98%) 0%, hsl(0 0% 94%) 100%)" }}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-0">
        {/* Left — Text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col justify-center"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 h-[3px]"
            style={{ backgroundColor: "hsl(155 78% 25%)" }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ color: "hsl(160 30% 8%)" }}
          >
            Nuevo Estadio
            <br />
            <span style={{ color: "hsl(155 78% 25%)" }}>
              Benito Villamarín
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-md font-body text-lg font-light leading-relaxed"
            style={{ color: "hsl(160 10% 35%)" }}
          >
            Un nuevo icono para Sevilla.
            <br />
            Una nueva etapa para el Real Betis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-md space-y-1 font-body text-sm font-light leading-relaxed"
            style={{ color: "hsl(160 10% 45%)" }}
          >
            <p>Más que una transformación arquitectónica.</p>
            <p>Una declaración de ambición.</p>
            <p>Un proyecto de ciudad.</p>
            <p>Un legado para las próximas generaciones.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#section-0"
              className="rounded-sm px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:shadow-[0_8px_30px_hsl(155_78%_25%/0.35)]"
              style={{ backgroundColor: "hsl(155 78% 25%)" }}
            >
              Descubrir el proyecto
            </a>
            <a
              href="#section-5"
              className="rounded-sm border px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                borderColor: "hsl(155 78% 25% / 0.4)",
                color: "hsl(155 78% 25%)",
              }}
            >
              Explorar oportunidades
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative flex items-center justify-center overflow-hidden rounded-2xl"
          style={{ minHeight: "420px" }}
        >
          <motion.img
            src={stadiumExterior}
            alt="Render exterior del Nuevo Estadio Benito Villamarín"
            className="h-full w-full object-cover rounded-2xl"
            style={{
              scale: imgScale,
              y: imgY,
              minHeight: "420px",
              maxHeight: "600px",
            }}
          />
          {/* Subtle overlay gradient at bottom for blending */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
            style={{ background: "linear-gradient(to top, hsl(0 0% 96% / 0.6), transparent)" }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity: textOpacity as any }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px"
          style={{ backgroundColor: "hsl(155 78% 25% / 0.4)" }}
        />
        <span
          className="font-body text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "hsl(160 10% 50%)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default SectionBillboard;
