import { motion } from "framer-motion";
import { fleet } from "../data/site";
import { Eyebrow } from "./ui";

export default function Fleet() {
  return (
    <section id="flotte" className="relative bg-sand py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>La flotte</Eyebrow>
            <h2 className="mt-5 max-w-xl text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.02] text-ink">
              Du matériel taillé pour le désert.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-xs leading-relaxed tracking-wide text-haze">
            CATALOGUE ENGINS & VÉHICULES — entretien atelier, normes strictes, mobilisation rapide.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((f, i) => (
            <motion.article
              key={f.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="group flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-sand-2/40 transition-all duration-300 hover:border-ink/25 hover:shadow-[0_20px_50px_-25px_rgba(28,26,23,0.5)]"
            >
              {/* En-tête fiche */}
              <div className="flex items-center justify-between border-b border-dashed border-ink/15 px-4 py-2.5">
                <span className="font-mono text-xs font-semibold tracking-[0.15em] text-cobalt">
                  {f.ref}
                </span>
                <span className="mono-label text-[0.6rem] text-haze">{f.cat}</span>
              </div>

              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-basalt">
                <img
                  src={f.image}
                  alt={f.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Corps */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-extrabold uppercase tracking-tight text-ink">
                  {f.name}
                </h3>
                <dl className="mt-4 space-y-2 border-t border-ink/10 pt-4">
                  {f.specs.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3">
                      <dt className="mono-label text-[0.6rem] text-haze">{k}</dt>
                      <dd className="rule-dash mx-2 h-px flex-1 self-center text-ink/15">&nbsp;</dd>
                      <dd className="text-right text-xs font-medium text-ink/80">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
