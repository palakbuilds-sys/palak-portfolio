import { useEffect, useState } from 'react';

export default function Loader({ onDone }: { onDone?: () => void }) {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 280);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) onDone?.();
  }, [done, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={done}
    >
      <div className="relative mb-8 h-20 w-20">
        <span className="absolute inset-0 rounded-2xl bg-brand-500/20 animate-pulse-ring" />
        <span className="absolute inset-0 rounded-2xl bg-brand-500/10 animate-pulse-ring [animation-delay:0.7s]" />
        <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
          <svg viewBox="0 0 64 64" className="h-10 w-10 text-white">
            <path
              d="M20 22 L32 42 L44 22"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <p className="font-display text-lg font-bold tracking-tight text-ink-900">
        Palak Solanki
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
        Web Designer & Developer
      </p>

      <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-ink-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-700 transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-[11px] font-medium text-ink-400">{progress}%</p>
    </div>
  );
}
