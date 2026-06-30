import { motion } from "framer-motion";
import { stats, about } from "../data/site";
import { Eyebrow } from "./ui";

export default function About() {
  return (
    <section id="terrain" className="relative bg-sand">
      {/* Bande de chiffres — chevauche le hero */}
      <div className="container-x relative z-10 -mt-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 shadow-[0_24px_60px_-30px_rgba(28,26,23,0.4)] lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-sand px-6 py-7"
            >
              <div className="flex items-start gap-1 font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {s.value}
                <span className="mt-1 text-xl text-rust sm:text-2xl">{s.suffix}</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-ink/80">{s.label}</div>
              <div className="mono-label mt-1 text-[0.6rem] text-haze">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Le terrain */}
      <div className="container-x grid grid-cols-1 gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-32">
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.02] text-ink"
          >
            {about.title}
          </motion.h2>
        </div>

        <div className="lg:pt-2">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink/75">
            {about.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Piliers */}
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {about.pillars.map((p) => (
              <div key={p.code} className="group bg-sand p-6 transition-colors hover:bg-sand-2">
                <span className="font-mono text-xs font-semibold text-rust">{p.code}</span>
                <h3 className="mt-3 font-display text-base font-extrabold uppercase tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
