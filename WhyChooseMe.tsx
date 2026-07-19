import { advantages, skills } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseMe() {
  return (
    <section id="why" className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Why choose me */}
          <div>
            <div className="reveal">
              <span className="section-eyebrow">Why choose me</span>
              <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl">
                A partner you can trust
              </h2>
              <p className="mt-4 text-base text-ink-500">
                Premium quality, honest pricing and a genuinely friendly process
                from first call to launch day.
              </p>
            </div>

            <div className="reveal mt-8 grid gap-3 sm:grid-cols-2" data-delay="120">
              {advantages.map((a) => (
                <div
                  key={a.title}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/70 p-3.5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-soft"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <a.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-semibold text-ink-800">
                    {a.title}
                  </span>
                  <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="reveal" data-delay="120">
            <div className="glass relative overflow-hidden rounded-3xl p-7 shadow-glass sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-300/40 blur-3xl" />
              <span className="section-eyebrow">Top skills</span>
              <h3 className="mt-5 font-display text-2xl font-700 tracking-tight text-ink-900">
                Tools I use to ship fast
              </h3>
              <p className="mt-3 text-sm text-ink-500">
                A modern toolkit combining front-end fundamentals with
                AI-powered workflows.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {skills.map((s, i) => (
                  <span
                    key={s}
                    className="group relative inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-ink-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 hover:shadow-soft"
                    data-delay={i * 50}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand-400 to-brand-700" />
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { k: 'Fast', v: 'Delivery' },
                  { k: 'Modern', v: 'UI/UX' },
                  { k: 'Affordable', v: 'Pricing' },
                ].map((x) => (
                  <div
                    key={x.v}
                    className="rounded-2xl border border-ink-100 bg-white/70 p-4 text-center"
                  >
                    <p className="font-display text-lg font-700 text-brand-700">
                      {x.k}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-ink-500">
                      {x.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
