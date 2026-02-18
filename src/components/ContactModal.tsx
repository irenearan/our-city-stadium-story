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
    name: "", company: "", position: "", email: "", phone: "", interest: interestType, message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="section-dark relative z-10 h-full w-full overflow-y-auto sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-xl"
          >
            <button onClick={onClose} className="absolute right-6 top-6 z-20 text-white/50 transition-colors hover:text-white">
              <X size={24} />
            </button>

            <div className="px-8 py-12 sm:px-12 sm:py-16">
              {!submitted ? (
                <>
                  <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">Contacto</p>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">Solicitar información</h3>
                  <p className="mt-3 text-sm font-light text-white/50">
                    Completa el formulario y nuestro equipo se pondrá en contacto contigo en breve.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Nombre y apellidos *" required value={form.name} onChange={(v) => handleChange("name", v)} />
                      <Field label="Empresa *" required value={form.company} onChange={(v) => handleChange("company", v)} />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Cargo *" required value={form.position} onChange={(v) => handleChange("position", v)} />
                      <Field label="Email *" required type="email" value={form.email} onChange={(v) => handleChange("email", v)} />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Teléfono (opcional)" value={form.phone} onChange={(v) => handleChange("phone", v)} />
                      <Field label="Tipo de interés" value={form.interest} onChange={(v) => handleChange("interest", v)} />
                    </div>
                    <div>
                      <label className="mb-2 block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Mensaje (opcional)</label>
                      <textarea rows={3} value={form.message} onChange={(e) => handleChange("message", e.target.value)}
                        className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-primary" />
                    </div>
                    <button type="submit" className="btn-betis-primary mt-4 w-full">Enviar solicitud</button>
                    <p className="text-center text-xs font-light text-white/40">Nuestro equipo se pondrá en contacto contigo en breve.</p>
                  </form>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary">
                    <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(152 100% 35%)" strokeWidth="2">
                      <motion.path d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">Solicitud enviada</h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-white/50">Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo a la mayor brevedad.</p>
                  <button onClick={onClose} className="btn-betis-white mt-8">Cerrar</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Field = ({ label, value, onChange, required, type = "text" }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string }) => (
  <div>
    <label className="mb-2 block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{label}</label>
    <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-primary" />
  </div>
);

export default ContactModal;
