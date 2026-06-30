import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { projects } from "../data/site";
import { Eyebrow, Contours } from "./ui";

export default function Projects() {
  return (
    <section id="chantiers" className="relative overflow-hidden bg-basalt-2 py-24 text-sand lg:py-32">
      <Contours className="text-dune/10" cx={30} cy={60} />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow tone="light">Journal de terrain</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.02] text-sand">
              Des chantiers réels, là où c'était difficile.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed tracking-wide text-haze-light/70">
            EXTRAITS · COORDONNÉES & DATES INDICATIVES
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-20">
          {projects.map((p, i) => (
            <motion.article
              key={p.log}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm [direction:ltr]">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-sand/10">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-basalt/70 via-transparent to-transparent" />
                  {/* Réticule façon relevé */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-sm bg-basalt/70 px-3 py-1.5 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rotate-45 bg-rust" />
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] text-dune">
                      {p.log}
                    </span>
                  </div>
                </div>
              </div>

              {/* Texte */}
              <div className="[direction:ltr]">
                <span className="mono-label text-rust">{p.sector}</span>
                <h3 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-sand">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-haze-light">{p.text}</p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-sand/10 pt-5">
                  <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-haze-light/80">
                    <MapPin size={13} className="text-dune" />
                    {p.coord}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-haze-light/80">
                    <Calendar size={13} className="text-dune" />
                    {p.date}
                  </span>
                  <span className="rounded-sm border border-cobalt-bright/40 bg-cobalt/15 px-3 py-1 font-mono text-[0.7rem] font-medium tracking-wide text-dune">
                    {p.metric}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
