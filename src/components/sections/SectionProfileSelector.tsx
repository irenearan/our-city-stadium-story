import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ContactModal from "@/components/ContactModal";

const profiles = [
  { id: "sponsor", title: "Marca / Sponsor", icon: "🏷️", copy: "El nuevo estadio es una plataforma estratégica de visibilidad y posicionamiento global.", cta: "Solicitar propuesta de patrocinio", interest: "Patrocinio" },
  { id: "investor", title: "Inversor", icon: "📈", copy: "Una oportunidad de inversión con retornos a largo plazo respaldada por un proyecto sólido y un club centenario.", cta: "Solicitar dossier de inversión", interest: "Inversión" },
  { id: "institutional", title: "Institucional", icon: "🏛️", copy: "El nuevo Villamarín será un motor de desarrollo urbano, empleo y cohesión social para Sevilla.", cta: "Solicitar informe institucional", interest: "Institucional" },
  { id: "events", title: "Eventos", icon: "🎤", copy: "Un espacio multifuncional diseñado para acoger eventos internacionales, conciertos y convenciones.", cta: "Explorar opciones de eventos", interest: "Eventos" },
  { id: "hospitality", title: "Hospitality", icon: "🥂", copy: "Experiencias premium, palcos VIP y espacios exclusivos que redefinen el concepto de hospitalidad deportiva.", cta: "Descubrir experiencias premium", interest: "Hospitality" },
];

const SectionProfileSelector = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [selected, setSelected] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState("");

  const selectedProfile = profiles.find((p) => p.id === selected);

  return (
    <>
      <section id="section-profile" ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-secondary">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 lg:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-center font-display text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            Tu perspectiva
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center font-display text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-6xl"
          >
            Descubre el proyecto
            <br />
            <span className="text-primary">desde tu perspectiva</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-4 max-w-lg text-center text-base font-light text-muted-foreground"
          >
            Selecciona tu perfil para acceder a información específica.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {profiles.map((profile, i) => (
              <motion.button
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                onClick={() => setSelected(selected === profile.id ? null : profile.id)}
                className={`group relative flex flex-col items-center gap-3 rounded-lg border px-4 py-6 text-center transition-all duration-300 ${
                  selected === profile.id
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border bg-white hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <span className="text-2xl">{profile.icon}</span>
                <span className="font-display text-xs font-bold uppercase tracking-wide text-foreground">{profile.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Dynamic content */}
          <motion.div
            initial={false}
            animate={{ height: selectedProfile ? "auto" : 0, opacity: selectedProfile ? 1 : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {selectedProfile && (
              <motion.div
                key={selectedProfile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 flex flex-col items-center text-center"
              >
                <p className="max-w-xl text-lg font-light leading-relaxed text-foreground/70">
                  {selectedProfile.copy}
                </p>
                <button
                  onClick={() => { setModalInterest(selectedProfile.interest); setModalOpen(true); }}
                  className="btn-betis-primary mt-8"
                >
                  {selectedProfile.cta}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} interestType={modalInterest} />
    </>
  );
};

export default SectionProfileSelector;
