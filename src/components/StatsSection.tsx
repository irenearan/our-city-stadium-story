import { motion } from "framer-motion";
import interiorImage from "@/assets/stadium-interior.jpg";

const stats = [
  { value: "65,000", label: "Seats" },
  { value: "12,000", label: "Jobs Created" },
  { value: "365", label: "Days of Activity" },
  { value: "Net Zero", label: "Carbon Target" },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={interiorImage}
          alt="Stadium interior filled with fans under golden sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            The Impact
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Numbers that{" "}
            <span className="text-gradient-gold">speak volumes.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border border-gold rounded-lg p-8 text-center backdrop-blur-sm bg-card/30"
            >
              <span className="font-display text-4xl font-bold text-gradient-gold md:text-5xl">
                {stat.value}
              </span>
              <p className="mt-3 font-body text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
