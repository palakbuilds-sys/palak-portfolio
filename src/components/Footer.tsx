import { Phone, Mail, Linkedin, MapPin, ArrowUp } from 'lucide-react';
import { contact } from '../data/content';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Why Me', href: '#why' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="container-px relative py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-soft">
                <svg viewBox="0 0 64 64" className="h-5 w-5">
                  <path
                    d="M20 22 L32 42 L44 22"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="font-display text-base font-700 text-white">
                Palak<span className="text-brand-400"> Solanki</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              Freelance web designer & developer helping businesses, startups and
              local brands build fast, modern and affordable websites with
              AI-powered workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {contact.availability.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-300 transition-colors hover:text-brand-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+${contact.phoneRaw}`}
                  className="flex items-center gap-2.5 text-ink-300 transition-colors hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 text-brand-400" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-ink-300 transition-colors hover:text-brand-400"
                >
                  <Mail className="h-4 w-4 text-brand-400" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-ink-300 transition-colors hover:text-brand-400"
                >
                  <Linkedin className="h-4 w-4 text-brand-400" />
                  {contact.linkedin}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ink-300">
                <MapPin className="h-4 w-4 text-brand-400" />
                {contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © 2026 Palak Solanki. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-ink-400 transition-colors hover:text-brand-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
