import { motion } from "framer-motion";

const milestones = [
  { year: "2025", title: "Public Consultation", desc: "City-wide forums, digital town halls, and community workshops shape the brief." },
  { year: "2026", title: "Design Competition", desc: "World-class architects compete. The people vote on the final three." },
  { year: "2027", title: "Groundbreaking", desc: "Shovels hit the earth. The first of 40,000 tons of recycled steel arrives on site." },
  { year: "2028", title: "Structure Rises", desc: "The iconic golden canopy takes shape against the skyline." },
  { year: "2029", title: "Opening Day", desc: "65,000 voices unite for the first time. A city transformed." },
];

const TimelineSection = () => {
  return (
    <section className="bg-gradient-section py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            The Journey
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Five years.{" "}
            <span className="text-gradient-gold">One dream.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-px bg-border md:left-1/2" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-16 flex items-start gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="font-display text-3xl font-bold text-primary">{milestone.year}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{milestone.title}</h3>
                <p className="mt-2 font-body text-base font-light text-muted-foreground">
                  {milestone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
