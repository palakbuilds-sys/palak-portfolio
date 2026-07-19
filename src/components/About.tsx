import { GraduationCap, Sparkles, Bot, Heart } from 'lucide-react';

const points = [
  { icon: GraduationCap, text: 'IGNOU BCA student' },
  { icon: Sparkles, text: 'Modern, responsive & user-friendly' },
  { icon: Bot, text: 'AI tools for faster delivery' },
  { icon: Heart, text: 'Affordable for small businesses' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="reveal relative">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* gradient ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 opacity-90 shadow-glow" />
              <div className="absolute inset-1.5 rounded-[2.25rem] bg-white/90 backdrop-blur-xl" />
              {/* avatar mark */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-glow animate-float">
                  <span className="font-display text-6xl font-800">PS</span>
                </div>
              </div>
              {/* floating chips */}
              <div className="glass absolute -left-4 top-10 rounded-2xl px-4 py-3 shadow-glass sm:-left-8">
                <p className="text-xs font-semibold text-ink-500">Design + Code</p>
                <p className="font-display text-sm font-700 text-ink-900">In one flow</p>
              </div>
              <div className="glass absolute -right-2 bottom-12 rounded-2xl px-4 py-3 shadow-glass sm:-right-6">
                <p className="text-xs font-semibold text-ink-500">Based in</p>
                <p className="font-display text-sm font-700 text-ink-900">Indore, India</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="reveal section-eyebrow">About me</span>
            <h2
              className="reveal mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl"
              data-delay="80"
            >
              Hi, I&apos;m Palak Solanki
            </h2>
            <div
              className="reveal mt-5 space-y-4 text-base leading-relaxed text-ink-600"
              data-delay="140"
            >
              <p>
                I&apos;m an IGNOU BCA student and freelance web designer &
                developer passionate about creating modern, responsive and
                user-friendly websites. I combine web development skills with AI
                tools to deliver high-quality websites faster without
                compromising quality.
              </p>
              <p>
                Whether you&apos;re a small business, clinic, school, college,
                gym, local shop or startup, I can help you establish a strong
                online presence with a professional website at an affordable
                price.
              </p>
            </div>

            <div
              className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2"
              data-delay="220"
            >
              {points.map((p) => (
                <div
                  key={p.text}
                  className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/70 p-3.5 backdrop-blur transition-colors hover:border-brand-200 hover:bg-brand-50/40"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <p.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium text-ink-700">
                    {p.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="reveal mt-8 flex flex-wrap gap-3" data-delay="300">
              <a href="#contact" className="btn-primary">
                Let&apos;s work together
              </a>
              <a href="#projects" className="btn-ghost">
                See my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
