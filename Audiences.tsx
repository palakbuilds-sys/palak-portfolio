import { audiences } from '../data/content';

export default function Audiences() {
  return (
    <section id="who" className="relative py-24 sm:py-28">
      {/* soft band */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-white to-white" />
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Who I work with</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl">
            Websites for every kind of brand
          </h2>
          <p className="mt-4 text-base text-ink-500">
            I help local businesses, institutions and personal brands build a
            trustworthy online presence.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <div
              key={a.label}
              className="group relative flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-soft"
              data-delay={(i % 4) * 60}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <a.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink-800">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
