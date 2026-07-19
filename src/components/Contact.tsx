import { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
  Globe,
  Building,
} from 'lucide-react';
import { contact } from '../data/content';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const items = [
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:+${contact.phoneRaw}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contact.linkedin,
      href: contact.linkedinUrl,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contact.location,
      href: 'https://maps.google.com/?q=Indore,Madhya+Pradesh,India',
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/50 to-white" />
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: info */}
          <div className="reveal">
            <span className="section-eyebrow">Contact</span>
            <h2 className="mt-5 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl">
              Let&apos;s build your website
            </h2>
            <p className="mt-4 text-base text-ink-500">
              Tell me about your business and I&apos;ll get back to you within 24
              hours with ideas, a timeline and a clear quote.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith('http') ? '_blank' : undefined}
                  rel={it.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-transform duration-300 group-hover:scale-110">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {it.label}
                    </span>
                    <span className="block truncate text-sm font-700 text-ink-900">
                      {it.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
              <p className="flex items-center gap-2 text-sm font-700 text-brand-800">
                <Clock className="h-4 w-4" /> Availability
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {contact.availability.map((a) => {
                  const Icon =
                    a.toLowerCase().includes('online')
                      ? Globe
                      : a.toLowerCase().includes('local')
                        ? Building
                        : CheckCircle2;
                  return (
                    <li key={a} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-brand-600" />
                      {a}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" data-delay="120">
            <form
              onSubmit={onSubmit}
              className="glass relative overflow-hidden rounded-3xl p-6 shadow-glass sm:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-300/40 blur-3xl" />

              <div className="relative grid gap-4">
                <Field label="Your name" name="name" value={form.name} onChange={onChange} placeholder="e.g. Anjali Verma" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@email.com" required />
                  <Field label="Phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91 ..." />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder="Tell me about your business, goals and timeline..."
                    className="w-full resize-none rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 transition-all focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary group w-full disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message sent!
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="animate-fade-in text-center text-sm font-medium text-emerald-600">
                    Thanks! I&apos;ll get back to you within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="animate-fade-in text-center text-sm font-medium text-rose-600">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 transition-all focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}
