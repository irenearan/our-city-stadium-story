import { motion, useScroll, useSpring } from "framer-motion";

const sectionLabels = [
  "Origen",
  "Evolución",
  "Visión",
  "Proyecto",
  "Capas",
  "Usos",
  "Perfil",
  "Futuro",
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-primary"
        style={{ scaleX: scaleY }}
      />

      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 md:flex">
        {sectionLabels.map((label, i) => {
          const id = i === 6 ? "section-profile" : `section-${i}`;
          return (
            <a
              key={label}
              href={`#${id}`}
              className="group flex items-center gap-3"
              title={label}
            >
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {label}
              </span>
              <span className="block h-2 w-2 rounded-full border border-muted-foreground/40 bg-transparent transition-all duration-300 group-hover:scale-150 group-hover:border-primary group-hover:bg-primary" />
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default ScrollProgress;
