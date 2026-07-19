import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      {/* ── Full-width banner image ── */}
      <div className="w-full pt-[72px] sm:pt-[80px]">
        <img
          src="/portofolio.png"
          alt="Palak Solanki — Freelance Web Designer & Web Developer"
          className="block w-full h-auto"
          draggable={false}
          fetchPriority="high"
        />
      </div>

      {/* ── CTA strip below the banner ── */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-ink-100">
        <div className="container-px flex flex-col items-center justify-center gap-3 py-6 sm:flex-row">
          <a href="#contact" className="btn-primary group w-full sm:w-auto">
            Book a Free Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#projects" className="btn-ghost group w-full sm:w-auto">
            Build Your Website at Affordable Prices
            <ArrowUpRight className="h-4 w-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* ── Stat cards ── */}
      <div className="container-px py-8 sm:py-10">
        <div className="reveal grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: '10+', v: 'Services offered' },
            { k: '6+', v: 'Industries served' },
            { k: '100%', v: 'Mobile responsive' },
            { k: '∞', v: 'Ongoing support' },
          ].map((s) => (
            <div
              key={s.v}
              className="glass card-hover rounded-2xl p-5 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-brand-700">
                {s.k}
              </p>
              <p className="mt-1 text-xs font-medium text-ink-500">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
