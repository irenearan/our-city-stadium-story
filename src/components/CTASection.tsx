import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            This is{" "}
            <span className="text-gradient-gold italic">your</span>{" "}
            stadium.
          </h2>
          <p className="mx-auto mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-muted-foreground">
            Every voice matters. Join the movement and help shape a landmark that 
            will define our city for generations to come.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="rounded-full bg-primary px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(42_78%_55%/0.4)] hover:scale-105">
              Join the Movement
            </button>
            <button className="rounded-full border border-gold px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-primary/10">
              Watch the Film
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-border px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-8">
          <span className="font-display text-sm text-muted-foreground">© 2025 Stadium Project</span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            A city initiative
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
