import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import eventsImg from "@/assets/betis-events.jpg";
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

  const openModal = (interest: string) => {
    setModalInterest(interest);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="section-5"
        ref={ref}
        className="relative flex min-h-screen flex-col items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={eventsImg}
            alt="Evento en el interior del estadio"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
          >
            Capítulo VI — Usos y Oportunidades
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
          >
            Más que un
            <br />
            <span className="text-gradient-gold">día de partido.</span>
          </motion.h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {uses.map((use, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                className="rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-light text-foreground/90 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10"
              >
                {use}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 max-w-lg text-lg font-light leading-relaxed text-muted-foreground"
          >
            Un estadio que genera valor{" "}
            <span className="font-medium text-foreground">cada día del año.</span>
          </motion.p>

          {/* CTA Block */}
          <div ref={ctaRef} className="mt-24 w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-primary/15 bg-card/60 px-8 py-12 backdrop-blur-md"
            >
              <h3 className="font-display text-2xl text-foreground md:text-3xl">
                ¿Quieres formar parte del nuevo{" "}
                <span className="text-gradient-green">Benito Villamarín</span>?
              </h3>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {ctaButtons.map((btn, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    onClick={() => openModal(btn.interest)}
                    className="group rounded-lg border border-border bg-secondary/30 px-6 py-4 text-left text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
                  >
                    <span className="transition-colors group-hover:text-primary">
                      {btn.label}
                    </span>
                    <span className="ml-2 inline-block text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        interestType={modalInterest}
      />
    </>
  );
};

export default SectionUses;
