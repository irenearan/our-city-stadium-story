import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import stadiumHospitality from "@/assets/stadium-hospitality.jpg";

const purposes = [
  { icon: "🎯", text: "Elevar la experiencia del aficionado" },
  { icon: "📈", text: "Expandir oportunidades comerciales" },
  { icon: "🌍", text: "Fortalecer el posicionamiento internacional" },
  { icon: "🤝", text: "Consolidar relaciones institucionales" },
];

const SectionProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="section-3"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2 lg:px-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Capítulo IV — El Proyecto
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Arquitectura
            <br />
            <span className="text-primary">con propósito.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg"
          >
            Cada línea tiene significado.
            <br />
            Cada espacio tiene intención.
          </motion.p>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 overflow-hidden rounded-xl shadow-lg"
          >
            <img src={stadiumHospitality} alt="Zona hospitality" className="h-56 w-full object-cover" />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-display text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground"
          >
            Diseñado para
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
              <span className="text-base font-medium text-foreground/80 md:text-lg">
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
