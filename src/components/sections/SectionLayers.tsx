import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import stadiumExterior from "@/assets/stadium-exterior.jpg";
import stadiumNight from "@/assets/stadium-night.jpg";
import ContactModal from "@/components/ContactModal";

const buildLayers = [
  { num: "01", title: "Estructura", subtitle: "Los Cimientos", desc: "Cimentación profunda y esqueleto de acero — los huesos de un coliseo moderno." },
  { num: "02", title: "Graderío", subtitle: "El Corazón", desc: "65.000 asientos diseñados para maximizar la atmósfera y las líneas de visión." },
  { num: "03", title: "Hospitality", subtitle: "La Oportunidad", desc: "Suites premium, lounges VIP y espacios corporativos que redefinen el día de partido." },
  { num: "04", title: "Usos Mixtos", subtitle: "La Conexión", desc: "Comercio, gastronomía, fitness y espacios comunitarios integrados en la estructura." },
  { num: "05", title: "Cubierta y Envolvente", subtitle: "La Visión", desc: "Una cubierta escultórica que protege, inspira y define el horizonte de la ciudad." },
];

const explorationZones = [
  { id: "hospitality", title: "Hospitality", desc: "Espacios premium con vistas privilegiadas al terreno de juego, gastronomía de autor y servicio exclusivo.", interest: "Hospitality" },
  { id: "naming", title: "Naming Rights", desc: "Una oportunidad estratégica de posicionamiento global vinculada al nuevo estadio.", interest: "Naming Rights" },
  { id: "events", title: "Zona Eventos", desc: "Espacios polivalentes para conciertos, convenciones y eventos de gran formato.", interest: "Eventos" },
  { id: "commercial", title: "Espacios Comerciales", desc: "Áreas integradas en el entorno urbano activas 365 días al año.", interest: "Comercial" },
  { id: "vip", title: "Palcos VIP", desc: "La máxima exclusividad con experiencias personalizadas para cada ocasión.", interest: "Palcos VIP" },
];

const SectionLayers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-15%" });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active layer index (0-4 for build, 5-9 for exploration)
  const totalSteps = buildLayers.length + explorationZones.length;

  const openModal = (interest: string) => {
    setModalInterest(interest);
    setModalOpen(true);
  };

  return (
    <>
      <section id="section-4" ref={containerRef} className="relative" style={{ height: `${(totalSteps + 1) * 100}vh` }}>
        {/* Sticky viewport */}
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
          {/* Background images */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.45, 0.5], [1, 1, 0.3]) }}
          >
            <img src={stadiumExterior} alt="Estadio exterior" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={{ opacity: useTransform(scrollYProgress, [0.45, 0.55], [0, 0.3]) }}
          >
            <img src={stadiumNight} alt="Estadio nocturno" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16">
            {/* Header — always visible */}
            <div ref={headerRef} className="mb-12">
              <motion.p
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary"
              >
                Capítulo V — Construcción por capas
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-display text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
              >
                Construido capa
                <br />
                <span className="text-gradient-green">a capa.</span>
              </motion.h2>
            </div>

            {/* Build Phase — Layers */}
            {buildLayers.map((layer, i) => {
              const start = i / totalSteps;
              const peak = (i + 0.5) / totalSteps;
              const end = (i + 1) / totalSteps;

              return (
                <BuildLayer
                  key={layer.num}
                  layer={layer}
                  index={i}
                  progress={scrollYProgress}
                  start={start}
                  peak={peak}
                  end={end}
                />
              );
            })}

            {/* Exploration Phase — Zones */}
            {explorationZones.map((zone, i) => {
              const offset = buildLayers.length;
              const start = (offset + i) / totalSteps;
              const peak = (offset + i + 0.5) / totalSteps;
              const end = (offset + i + 1) / totalSteps;

              return (
                <ExplorationZone
                  key={zone.id}
                  zone={zone}
                  progress={scrollYProgress}
                  start={start}
                  peak={peak}
                  end={end}
                  onCTA={() => openModal(zone.interest)}
                />
              );
            })}

            {/* Progress indicator */}
            <div className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
              {[...buildLayers, ...explorationZones.map(z => ({ num: "", title: z.title }))].map((_, i) => (
                <ProgressDot key={i} index={i} total={totalSteps} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} interestType={modalInterest} />
    </>
  );
};

/* Sub-components */

const BuildLayer = ({
  layer,
  index,
  progress,
  start,
  peak,
  end,
}: {
  layer: typeof buildLayers[0];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  peak: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, peak, end], [0, 1, 0]);
  const y = useTransform(progress, [start, peak, end], [60, 0, -30]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute bottom-24 left-6 right-6 lg:left-16 lg:right-16"
    >
      <div className="flex items-start gap-6 md:gap-10">
        <span className="font-body text-5xl font-bold text-primary/20 md:text-7xl">{layer.num}</span>
        <div>
          <h3 className="font-display text-2xl text-foreground md:text-4xl">{layer.title}</h3>
          <p className="mt-1 text-sm font-medium italic text-accent">{layer.subtitle}</p>
          <p className="mt-3 max-w-lg text-base font-light leading-relaxed text-muted-foreground">{layer.desc}</p>
        </div>
      </div>
      {/* Progress bar for this layer */}
      <div className="mt-6 h-px w-full bg-border">
        <motion.div
          className="h-full bg-primary"
          style={{ width: useTransform(progress, [start, peak], ["0%", "100%"]) }}
        />
      </div>
    </motion.div>
  );
};

const ExplorationZone = ({
  zone,
  progress,
  start,
  peak,
  end,
  onCTA,
}: {
  zone: typeof explorationZones[0];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  peak: number;
  end: number;
  onCTA: () => void;
}) => {
  const opacity = useTransform(progress, [start, peak, end], [0, 1, 0]);
  const x = useTransform(progress, [start, peak, end], [80, 0, -40]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="pointer-events-auto absolute bottom-20 right-6 max-w-md lg:right-16"
    >
      <div className="rounded-xl border border-primary/20 bg-card/80 p-8 backdrop-blur-lg">
        <div className="mb-1 h-1 w-10 rounded-full bg-primary" />
        <h4 className="mt-4 font-display text-xl text-foreground md:text-2xl">{zone.title}</h4>
        <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{zone.desc}</p>
        <button
          onClick={onCTA}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:tracking-[0.3em]"
        >
          Solicitar información →
        </button>
      </div>
    </motion.div>
  );
};

const ProgressDot = ({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const dotOpacity = useTransform(progress, [start, (start + end) / 2, end], [0.2, 1, 0.2]);
  const dotScale = useTransform(progress, [start, (start + end) / 2, end], [0.6, 1, 0.6]);

  return (
    <motion.div
      style={{ opacity: dotOpacity, scale: dotScale }}
      className="h-2 w-2 rounded-full bg-primary"
    />
  );
};

export default SectionLayers;
