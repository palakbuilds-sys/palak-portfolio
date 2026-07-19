import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="container-px">
        <div className="reveal flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Selected work</span>
            <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl">
              Projects I love to build
            </h2>
            <p className="mt-4 text-base text-ink-500">
              A glimpse of the kinds of websites I design and develop for
              businesses across industries.
            </p>
          </div>
          <a href="#contact" className="btn-ghost shrink-0">
            Start your project
            <ArrowUpRight className="h-4 w-4 text-brand-600" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              data-delay={(i % 3) * 80}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.accent} mix-blend-multiply opacity-70`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                <span className="absolute left-4 top-4 chip border-white/30 bg-white/20 text-white backdrop-blur-md">
                  {p.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-display text-xl font-700 text-white drop-shadow">
                    {p.title}
                  </h3>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-700 shadow-soft transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-sm leading-relaxed text-ink-500">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
