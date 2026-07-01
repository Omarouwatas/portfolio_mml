import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { contact, company } from "../data/site";
import { Eyebrow, Contours } from "./ui";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full rounded-sm border border-sand/20 bg-sand/5 px-4 py-3 text-sm text-sand placeholder:text-haze-light/50 transition-colors focus:border-cobalt-bright focus:bg-sand/10 focus:outline-none";

  return (
    <section id="contact" className="relative overflow-hidden bg-basalt py-24 text-sand lg:py-32">
      <Contours className="text-cobalt/15" cx={80} cy={30} />

      <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* Colonne gauche */}
        <div>
          <Eyebrow tone="light">{contact.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-md text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.0] text-sand">
            {contact.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-haze-light">{contact.lead}</p>

          <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-sm border border-sand/10 bg-sand/10">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 bg-basalt px-5 py-4 transition-colors hover:bg-basalt-2"
            >
              <Phone size={18} className="text-rust" />
              <span className="flex flex-col">
                <span className="mono-label text-[0.6rem] text-haze">Téléphone</span>
                <span className="font-mono text-sm text-sand">{company.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="group flex items-center gap-4 bg-basalt px-5 py-4 transition-colors hover:bg-basalt-2"
            >
              <Mail size={18} className="text-rust" />
              <span className="flex flex-col">
                <span className="mono-label text-[0.6rem] text-haze">Email</span>
                <span className="font-mono text-sm text-sand">{company.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 bg-basalt px-5 py-4">
              <MapPin size={18} className="text-rust" />
              <span className="flex flex-col">
                <span className="mono-label text-[0.6rem] text-haze">Base</span>
                <span className="font-mono text-sm text-sand">{company.address}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="rounded-sm border border-sand/10 bg-basalt-2/60 p-6 backdrop-blur-sm sm:p-8">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-cobalt text-sand">
                <Check size={24} />
              </span>
              <h3 className="mt-6 font-display text-xl font-extrabold uppercase tracking-tight text-sand">
                Demande envoyée
              </h3>
              <p className="mt-3 max-w-xs text-sm text-haze-light">
                Merci. On revient vers vous avec le matériel adapté et un devis clair.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <label className="mono-label text-[0.6rem] text-haze">{contact.fields.name}</label>
                <input required className={`mt-2 ${inputCls}`} type="text" autoComplete="name" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mono-label text-[0.6rem] text-haze">{contact.fields.email}</label>
                  <input required className={`mt-2 ${inputCls}`} type="email" autoComplete="email" />
                </div>
                <div>
                  <label className="mono-label text-[0.6rem] text-haze">{contact.fields.phone}</label>
                  <input className={`mt-2 ${inputCls}`} type="tel" autoComplete="tel" />
                </div>
              </div>
              <div>
                <label className="mono-label text-[0.6rem] text-haze">{contact.fields.message}</label>
                <textarea required rows={5} className={`mt-2 resize-none ${inputCls}`} />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-sm bg-cobalt px-6 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-cobalt-bright"
              >
                {contact.fields.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
