import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { contact } from '../data/content';

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waHref = `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(
    "Hi Palak, I'd like to discuss a website project.",
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full border border-ink-200 bg-white/90 text-brand-700 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white ${
          show
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center"
      >
        <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-full bg-ink-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-pulse-ring" />
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
          <MessageCircle className="h-6 w-6" />
        </span>
      </a>
    </div>
  );
}
