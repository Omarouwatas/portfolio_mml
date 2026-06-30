import { motion } from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";
import { hero, ticker, company } from "../data/site";
import { Button, Contours } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-basalt text-sand">
      {/* Image de terrain — la machine dans la dune */}
      <div className="absolute inset-0">
        <img
          src="/img/hero-loader-dune.webp"
          alt="Chargeuse MML en opération dans le Sahara mauritanien"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-basalt via-basalt/85 to-basalt/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-basalt via-transparent to-basalt/60" />
      </div>

      {/* Courbes de niveau */}
      <Contours className="text-dune/15" cx={78} cy={40} />

      <div className="container-x relative grid min-h-[100svh] grid-cols-1 items-center gap-10 pt-28 pb-16 lg:pt-24">
        <div className="max-w-3xl">
          {/* En-tête de relevé */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="mono-label flex items-center gap-2.5 text-dune">
              <span className="inline-block h-2 w-2 rotate-45 bg-rust" />
              {hero.eyebrow}
            </span>
            <span className="hidden h-px w-12 rule-dash text-dune/40 sm:block">&nbsp;</span>
            <span className="mono-label text-haze-light/60">{hero.coordinate}</span>
          </motion.div>

          {/* Titre */}
          <h1 className="mt-7 display-tight text-[clamp(2.6rem,8vw,6rem)]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="block"
            >
              {hero.titleTop}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="block text-rust"
            >
              {hero.titleAccent}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              className="block"
            >
              {hero.titleBottom}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-haze-light sm:text-lg"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact">
              {hero.ctaPrimary}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="#flotte"
              className="group inline-flex items-center gap-2.5 rounded-sm border border-sand/25 px-6 py-3.5 text-sm font-semibold text-sand transition-colors hover:border-sand hover:bg-sand hover:text-basalt"
            >
              <Truck size={16} />
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bande défilante — vocabulaire du métier */}
      <div className="relative border-t border-sand/10 bg-basalt-2/80 py-3.5 backdrop-blur-sm">
        <div className="flex w-max animate-ticker gap-0">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center">
              <span className="mono-label whitespace-nowrap px-7 text-haze-light/80">{t}</span>
              <span className="h-1 w-1 rotate-45 bg-rust/70" />
            </span>
          ))}
        </div>
      </div>

      {/* Filigrane légal discret */}
      <span className="pointer-events-none absolute right-5 top-24 hidden font-mono text-[0.6rem] tracking-[0.2em] text-haze-light/40 lg:block">
        {company.legal.toUpperCase()}
      </span>
    </section>
  );
}
