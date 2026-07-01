import { nav, company, footer } from "../data/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-sand/10 bg-basalt text-sand">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/img/logo-white.png" alt="" className="h-10 w-10 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-extrabold tracking-tight">MML</span>
                <span className="mono-label text-[0.55rem] tracking-[0.25em] text-haze">
                  {company.legal}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-haze-light">{footer.blurb}</p>
          </div>

          <div>
            <span className="mono-label text-haze">Navigation</span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-haze-light transition-colors hover:text-sand"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="mono-label text-haze">Contact</span>
            <ul className="mt-4 flex flex-col gap-2.5 font-mono text-sm text-haze-light">
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-sand">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-sand">
                  {company.email}
                </a>
              </li>
              <li className="text-haze-light/80">{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sand/10 pt-6 font-mono text-[0.7rem] tracking-wide text-haze sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {company.name}. {footer.rights}
          </span>
          <span className="text-haze-light/70">{footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
