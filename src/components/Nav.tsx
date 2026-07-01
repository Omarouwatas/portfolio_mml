import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, company } from "../data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-sand/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={scrolled ? "/img/logo-black.png" : "/img/logo-white.png"}
            alt=""
            className="h-9 w-9 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-extrabold tracking-tight ${
                scrolled ? "text-ink" : "text-sand"
              }`}
            >
              MML
            </span>
            <span
              className={`mono-label text-[0.55rem] tracking-[0.25em] ${
                scrolled ? "text-haze" : "text-haze-light/80"
              }`}
            >
              {company.legal}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`group relative text-sm font-medium transition-colors ${
                scrolled ? "text-ink/70 hover:text-ink" : "text-sand/80 hover:text-sand"
              }`}
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`group hidden items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors lg:inline-flex ${
            scrolled
              ? "bg-ink text-sand hover:bg-cobalt"
              : "bg-sand text-basalt hover:bg-cobalt hover:text-sand"
          }`}
        >
          Devis
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className={`grid h-10 w-10 place-items-center rounded-sm border lg:hidden ${
            scrolled || open ? "border-ink/15 text-ink" : "border-sand/25 text-sand"
          }`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-ink/10 bg-sand lg:hidden">
          <div className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/5 py-3.5 text-base font-medium text-ink/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-cobalt px-5 py-3.5 text-sm font-semibold text-sand"
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
