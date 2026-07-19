import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '../data/content';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left intro */}
          <div className="reveal">
            <span className="section-eyebrow">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </span>
            <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-base text-ink-500">
              Everything you might want to know before we start working together.
              Still curious? I&apos;m a message away.
            </p>
            <a href="#contact" className="btn-primary mt-7">
              Ask your question
            </a>
          </div>

          {/* Accordion */}
          <div className="reveal" data-delay="100">
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className={`overflow-hidden rounded-2xl border bg-white/70 backdrop-blur transition-all duration-300 ${
                      isOpen
                        ? 'border-brand-200 shadow-soft'
                        : 'border-ink-100 hover:border-brand-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-700 text-ink-900 sm:text-base">
                        {f.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'bg-brand-600 text-white rotate-180'
                            : 'bg-brand-50 text-brand-700'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
