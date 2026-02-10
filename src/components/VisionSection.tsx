import { motion } from "framer-motion";
import blueprintImage from "@/assets/blueprint-stadium.jpg";

const VisionSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-3xl"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            The Vision
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Not just concrete and steel.{" "}
            <span className="text-gradient-gold">A heartbeat.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-lg font-light leading-relaxed text-muted-foreground">
            Every great city has a gathering place — a space where strangers become
            neighbors and a roar becomes a chorus. This stadium will be that place.
            Designed to serve the community 365 days a year, it rises not as a monument to 
            sport alone, but as a catalyst for connection.
          </p>
        </motion.div>

        {/* Blueprint image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-lg glow-gold"
        >
          <img
            src={blueprintImage}
            alt="Stadium architectural blueprint with golden wireframe lines"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </motion.div>

        {/* Key pillars */}
        <div className="mt-24 grid gap-12 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Community First",
              desc: "Public plazas, green corridors, and open-air markets activate the grounds year-round — not just on match days.",
            },
            {
              number: "02",
              title: "Sustainable by Design",
              desc: "Net-zero carbon operations. Rainwater harvesting. Solar canopy. A stadium that gives back more than it takes.",
            },
            {
              number: "03",
              title: "Economic Engine",
              desc: "12,000 permanent jobs. A new transit hub. Revitalized neighborhoods. The ripple effect will reshape the city.",
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border-t border-gold pt-8"
            >
              <span className="font-display text-sm text-primary">{pillar.number}</span>
              <h3 className="mt-3 font-display text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-4 font-body text-base font-light leading-relaxed text-muted-foreground">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
