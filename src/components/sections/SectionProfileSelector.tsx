import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ContactModal from "@/components/ContactModal";

const profiles = [
  {
    id: "sponsor",
    title: "Marca / Sponsor",
    icon: "🏷️",
    copy: "El nuevo estadio es una plataforma estratégica de visibilidad y posicionamiento global.",
    cta: "Solicitar propuesta de patrocinio",
    interest: "Patrocinio",
  },
  {
    id: "investor",
    title: "Inversor",
    icon: "📈",
    copy: "Una oportunidad de inversión con retornos a largo plazo respaldada por un proyecto sólido y un club centenario.",
    cta: "Solicitar dossier de inversión",
    interest: "Inversión",
  },
  {
    id: "institutional",
    title: "Institucional",
    icon: "🏛️",
    copy: "El nuevo Villamarín será un motor de desarrollo urbano, empleo y cohesión social para Sevilla.",
    cta: "Solicitar informe institucional",
    interest: "Institucional",
  },
  {
    id: "events",
    title: "Eventos",
    icon: "🎤",
    copy: "Un espacio multifuncional diseñado para acoger eventos internacionales, conciertos y convenciones.",
    cta: "Explorar opciones de eventos",
    interest: "Eventos",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: "🥂",
    copy: "Experiencias premium, palcos VIP y espacios exclusivos que redefinen el concepto de hospitalidad deportiva.",
    cta: "Descubrir experiencias premium",
    interest: "Hospitality",
  },
];

const SectionProfileSelector = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [selected, setSelected] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState("");

  const selectedProfile = profiles.find((p) => p.id === selected);

  const handleCTA = (interest: string) => {
    setModalInterest(interest);
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="section-profile"
        ref={ref}
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-section"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 lg:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-center font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
          >
            Tu perspectiva
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center font-display text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
          >
            Descubre el proyecto
            <br />
            <span className="text-gradient-gold">desde tu perspectiva</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-6 max-w-lg text-center text-base font-light text-muted-foreground"
          >
            Selecciona tu perfil para acceder a información específica.
          </motion.p>

          {/* Profile cards */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {profiles.map((profile, i) => (
              <motion.button
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.12 }}
                onClick={() => setSelected(selected === profile.id ? null : profile.id)}
                className={`group relative flex flex-col items-center gap-3 rounded-xl border px-4 py-8 text-center transition-all duration-500 ${
                  selected === profile.id
                    ? "border-primary bg-primary/10 shadow-[0_0_30px_hsl(155_78%_25%/0.15)]"
                    : "border-border bg-card/50 hover:border-primary/30 hover:bg-card"
                }`}
              >
                <span className="text-3xl">{profile.icon}</span>
                <span className="font-body text-sm font-medium text-foreground">{profile.title}</span>
                <div
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-primary transition-all duration-500 ${
                    selected === profile.id ? "w-full" : "w-0"
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Dynamic content */}
          <motion.div
            initial={false}
            animate={{
              height: selectedProfile ? "auto" : 0,
              opacity: selectedProfile ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {selectedProfile && (
              <motion.div
                key={selectedProfile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 flex flex-col items-center text-center"
              >
                <p className="max-w-xl text-lg font-light leading-relaxed text-foreground/80">
                  {selectedProfile.copy}
                </p>
                <button
                  onClick={() => handleCTA(selectedProfile.interest)}
                  className="mt-8 border border-primary/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {selectedProfile.cta}
                </button>
              </motion.div>
            )}
          </motion.div>
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

export default SectionProfileSelector;
