import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Services</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl">
            Everything your brand needs online
          </h2>
          <p className="mt-4 text-base text-ink-500">
            From a single landing page to a full business website — designed,
            built and maintained with care.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal card card-hover group relative overflow-hidden"
              data-delay={(i % 3) * 80}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-300/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/60 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-700 text-ink-900">
                  {s.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                {s.desc}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-brand-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="h-px w-6 bg-brand-400" />
                Included in packages
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
