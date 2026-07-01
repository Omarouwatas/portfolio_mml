import { motion } from "framer-motion";
import { Calendar, MapPin, ShieldCheck } from "lucide-react";
import { projectCases } from "../data/site";
import { Contours, Eyebrow } from "./ui";

export default function Projects() {
  return (
    <section id="chantiers" className="relative overflow-hidden bg-basalt-2 py-24 text-sand lg:py-32">
      <Contours className="text-dune/10" cx={30} cy={60} />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow tone="light">Chantiers</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.02] text-sand">
              Deux campagnes Tijirit, une logistique de bout en bout.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-haze-light">
            Prospection aurifère, camp de vie, forage, géophysique, transport et traitement des
            échantillons : MML couvre le terrain avant, pendant et après l'opération.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {projectCases.map((project) => (
            <motion.article
              key={project.log}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-xl border border-sand/10 bg-basalt/70 p-4 sm:p-6 lg:p-8"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-rust/40 bg-rust/10 px-3 py-1 font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-dune">
                      {project.log}
                    </span>
                    <span className="mono-label text-haze-light/70">{project.sector}</span>
                  </div>

                  <h3 className="mt-5 font-display text-[clamp(1.55rem,3vw,2.35rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-sand">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-haze-light">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-sand/10 pt-5">
                    <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-haze-light/80">
                      <Calendar size={14} className="text-dune" />
                      {project.period}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-haze-light/80">
                      <MapPin size={14} className="text-dune" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-haze-light/80">
                      <ShieldCheck size={14} className="text-dune" />
                      Suivi HSE
                    </span>
                  </div>

                  <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {project.stats.map(([label, value]) => (
                      <div key={label} className="rounded-lg border border-sand/10 bg-sand/5 p-4">
                        <dt className="mono-label text-[0.58rem] text-haze-light/60">{label}</dt>
                        <dd className="mt-2 text-sm font-semibold text-sand">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-haze-light">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-rust" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-0">
                  <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-color:#b4471f_#232019] [scrollbar-width:thin]">
                    {project.gallery.map((photo, index) => (
                      <figure
                        key={photo.src}
                        className="min-w-[82%] snap-start overflow-hidden rounded-xl border border-sand/10 bg-sand/5 sm:min-w-[24rem] lg:min-w-[30rem]"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-basalt-3">
                          <img
                            src={photo.src}
                            alt={`${project.log} - ${photo.caption}`}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                        <figcaption className="flex items-center gap-3 border-t border-sand/10 px-4 py-3">
                          <span className="font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-rust">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-haze-light">{photo.caption}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
