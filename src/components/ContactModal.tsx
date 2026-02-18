import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  interestType?: string;
}

const ContactModal = ({ isOpen, onClose, interestType = "" }: ContactModalProps) => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    interest: interestType,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-full w-full overflow-y-auto bg-[hsl(160_30%_6%)] sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 text-foreground/50 transition-colors hover:text-foreground"
            >
              <X size={24} />
            </button>

            <div className="px-8 py-12 sm:px-12 sm:py-16">
              {!submitted ? (
                <>
                  <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                    Contacto
                  </p>
                  <h3 className="font-display text-3xl text-foreground md:text-4xl">
                    Solicitar información
                  </h3>
                  <p className="mt-3 text-sm font-light text-muted-foreground">
                    Completa el formulario y nuestro equipo se pondrá en contacto contigo en breve.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-foreground/60">
                          Nombre y apellidos *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-foreground/60">
                          Empresa *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-foreground/60">
                          Cargo *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.position}
                          onChange={(e) => handleChange("position", e.target.value)}
                          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-foreground/60">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-foreground/60">
                          Teléfono (opcional)
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-foreground/60">
                          Tipo de interés
                        </label>
                        <input
                          type="text"
                          value={form.interest}
                          onChange={(e) => handleChange("interest", e.target.value)}
                          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-foreground/60">
                        Mensaje (opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full rounded-sm bg-primary py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(155_78%_25%/0.3)]"
                    >
                      Enviar solicitud
                    </button>

                    <p className="text-center text-xs font-light text-muted-foreground">
                      Nuestro equipo se pondrá en contacto contigo en breve.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 h-16 w-16 rounded-full border-2 border-primary flex items-center justify-center">
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(155 78% 35%)" strokeWidth="2"
                    >
                      <motion.path d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Solicitud enviada</h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-muted-foreground">
                    Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo a la mayor brevedad.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 border border-border px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary"
                  >
                    Cerrar
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
