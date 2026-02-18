import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import stadiumMatchday from "@/assets/stadium-matchday.jpg";
import ContactModal from "@/components/ContactModal";

const uses = [
  "Eventos internacionales",
  "Conciertos y programación cultural",
  "Hospitality premium",
  "Activaciones corporativas",
  "Impacto económico todo el año",
];

const ctaButtons = [
  { label: "Explorar oportunidades de patrocinio", interest: "Patrocinio" },
  { label: "Solicitar dossier institucional", interest: "Institucional" },
  { label: "Información sobre hospitality", interest: "Hospitality" },
  { label: "Organizar un evento", interest: "Eventos" },
];

const SectionUses = () => {
  const ref = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState("");

  return (
    <>
      <section id="section-5" ref={ref} className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Capítulo VI — Usos y Oportunidades
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl"
          >
            Más que un
            <br />
            <span className="text-primary">día de partido.</span>
          </motion.h2>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 w-full max-w-4xl overflow-hidden rounded-xl shadow-lg"
          >
            <img src={stadiumMatchday} alt="Día de partido" className="h-64 w-full object-cover md:h-80" />
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {uses.map((use, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                className="rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10"
              >
                {use}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 max-w-lg text-lg font-light leading-relaxed text-muted-foreground"
          >
            Un estadio que genera valor{" "}
            <span className="font-semibold text-foreground">cada día del año.</span>
          </motion.p>

          {/* CTA Block */}
          <div ref={ctaRef} className="mt-20 w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="rounded-xl border border-border bg-card p-8 shadow-sm md:p-12"
            >
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                ¿Quieres formar parte del nuevo{" "}
                <span className="text-primary">Benito Villamarín</span>?
              </h3>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {ctaButtons.map((btn, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    onClick={() => { setModalInterest(btn.interest); setModalOpen(true); }}
                    className="group rounded-md border border-border px-6 py-4 text-left text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  >
                    <span className="transition-colors group-hover:text-primary">{btn.label}</span>
                    <span className="ml-2 inline-block text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} interestType={modalInterest} />
    </>
  );
};

export default SectionUses;
