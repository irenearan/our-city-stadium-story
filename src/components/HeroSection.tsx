import { motion } from "framer-motion";
import heroImage from "@/assets/hero-stadium.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vista aérea de un estadio futurista al atardecer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary"
        >
          El sueño de una ciudad — 2029
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          Donde la Ciudad
          <br />
          <span className="text-gradient-gold">Encuentra Su Voz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-muted-foreground"
        >
          Más que un estadio. Un hito nacido del pueblo, para el pueblo —
          dibujando el horizonte del mañana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Desliza para explorar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-primary/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
