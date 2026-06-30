import { motion } from "framer-motion";
import { sectors } from "../data/site";
import { Eyebrow } from "./ui";

export default function Sectors() {
  return (
    <section id="secteurs" className="bg-sand py-24 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Secteurs desservis</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.02] text-ink">
            Les industries qui ne peuvent pas attendre.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative flex flex-col justify-between gap-10 bg-sand p-7 transition-colors hover:bg-basalt"
            >
              <span className="font-display text-5xl font-extrabold text-ink/10 transition-colors group-hover:text-rust">
                {s.code}
              </span>
              <div>
                <h3 className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-sand">
                  {s.name}
                </h3>
                <p className="mt-2 font-mono text-[0.7rem] leading-relaxed tracking-wide text-haze transition-colors group-hover:text-haze-light">
                  {s.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
