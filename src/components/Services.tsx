import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/site";
import { Eyebrow } from "./ui";

export default function Services() {
  return (
    <section id="services" className="relative bg-basalt py-24 text-sand lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow tone="light">Prestations</Eyebrow>
            <h2 className="mt-5 max-w-xl text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.02] text-sand">
              Quatre métiers, un seul interlocuteur.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-haze-light">
            Du devis à la livraison sur site, MML couvre la chaîne complète — sans sous-traiter
            ce qui fait la différence sur le terrain.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-sand/10 bg-sand/10 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden bg-basalt"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden sm:h-60">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover opacity-80 grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/30 to-transparent" />
                <span className="absolute left-5 top-5 font-mono text-xs font-semibold tracking-[0.18em] text-dune">
                  {s.code}
                </span>
              </div>

              {/* Contenu */}
              <div className="p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-sand">
                    {s.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-haze-light transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rust"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-haze-light">{s.text}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-sm border border-sand/15 bg-sand/5 px-3 py-1.5 font-mono text-[0.7rem] tracking-wide text-haze-light"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
