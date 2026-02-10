import { motion } from "framer-motion";
import blueprintImage from "@/assets/blueprint-stadium.jpg";

const VisionSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-3xl"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            La Visión
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            No es solo hormigón y acero.{" "}
            <span className="text-gradient-gold">Es un latido.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-lg font-light leading-relaxed text-muted-foreground">
            Toda gran ciudad tiene un lugar de encuentro — un espacio donde los desconocidos
            se vuelven vecinos y un rugido se convierte en coro. Este estadio será ese lugar.
            Diseñado para servir a la comunidad los 365 días del año, se erige no como un monumento
            al deporte, sino como un catalizador de conexión.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-lg glow-gold"
        >
          <img
            src={blueprintImage}
            alt="Plano arquitectónico del estadio con líneas doradas"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </motion.div>

        <div className="mt-24 grid gap-12 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "La Comunidad Primero",
              desc: "Plazas públicas, corredores verdes y mercados al aire libre activan el recinto todo el año — no solo los días de partido.",
            },
            {
              number: "02",
              title: "Sostenible por Diseño",
              desc: "Operaciones con cero emisiones netas. Captación de agua de lluvia. Cubierta solar. Un estadio que devuelve más de lo que consume.",
            },
            {
              number: "03",
              title: "Motor Económico",
              desc: "12.000 empleos permanentes. Un nuevo nodo de transporte. Barrios revitalizados. El efecto dominó transformará la ciudad.",
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
