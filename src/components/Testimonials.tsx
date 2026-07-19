import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl">
            Loved by clients
          </h2>
          <p className="mt-4 text-base text-ink-500">
            Real words from the businesses and founders I&apos;ve worked with.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal card card-hover relative flex flex-col"
              data-delay={(i % 3) * 80}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-brand-100" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <p className="text-sm font-700 text-ink-900">{t.name}</p>
                  <p className="text-xs font-medium text-ink-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
