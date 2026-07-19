import {
  Palette,
  Code2,
  LayoutTemplate,
  UserSquare2,
  Briefcase,
  Smartphone,
  RefreshCw,
  Sparkles,
  Search,
  Wrench,
  School,
  GraduationCap,
  Stethoscope,
  HeartPulse,
  Dumbbell,
  Store,
  UtensilsCrossed,
  Rocket,
  Building2,
  User,
  BadgeCheck,
  Wallet,
  Zap,
  MonitorSmartphone,
  Bot,
  Brush,
  MessagesSquare,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react';

export type Service = { title: string; desc: string; icon: LucideIcon };
export const services: Service[] = [
  { title: 'Website Design', desc: 'Modern, on-brand UI design that feels premium and converts visitors.', icon: Palette },
  { title: 'Website Development', desc: 'Fast, accessible, SEO-friendly builds with clean, scalable code.', icon: Code2 },
  { title: 'Landing Pages', desc: 'High-conversion single-page sites for launches, offers & campaigns.', icon: LayoutTemplate },
  { title: 'Portfolio Websites', desc: 'Showcase your work with an elegant, personal online presence.', icon: UserSquare2 },
  { title: 'Business Websites', desc: 'Professional multi-page sites that build trust for your brand.', icon: Briefcase },
  { title: 'Responsive Design', desc: 'Pixel-perfect layouts that look great on every screen size.', icon: Smartphone },
  { title: 'Website Redesign', desc: 'Refresh outdated sites into modern, fast, mobile-first experiences.', icon: RefreshCw },
  { title: 'AI-assisted Website Creation', desc: 'AI-powered workflows for faster delivery without losing quality.', icon: Sparkles },
  { title: 'Basic SEO Setup', desc: 'On-page SEO, metadata & performance for better discoverability.', icon: Search },
  { title: 'Website Maintenance', desc: 'Ongoing updates, backups, security & content changes.', icon: Wrench },
];

export type Audience = { label: string; icon: LucideIcon };
export const audiences: Audience[] = [
  { label: 'Schools', icon: School },
  { label: 'Colleges', icon: GraduationCap },
  { label: 'Clinics', icon: Stethoscope },
  { label: 'Doctors', icon: HeartPulse },
  { label: 'Gyms', icon: Dumbbell },
  { label: 'Local Shops', icon: Store },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'Startups', icon: Rocket },
  { label: 'Small Businesses', icon: Building2 },
  { label: 'Freelancers', icon: User },
  { label: 'Personal Brands', icon: BadgeCheck },
];

export type Advantage = { title: string; icon: LucideIcon };
export const advantages: Advantage[] = [
  { title: 'Affordable Pricing', icon: Wallet },
  { title: 'Fast Delivery', icon: Zap },
  { title: 'Modern UI Design', icon: Brush },
  { title: 'Mobile Responsive', icon: MonitorSmartphone },
  { title: 'AI-powered Workflow', icon: Bot },
  { title: 'Clean & Professional Design', icon: Palette },
  { title: 'Friendly Communication', icon: MessagesSquare },
  { title: 'Ongoing Support', icon: LifeBuoy },
];

export const skills: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'Responsive Web Design',
  'Generative AI Tools',
  'Prompt Engineering',
  'Website Design',
  'Website Development',
];

export type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  image: string;
  accent: string;
};
export const projects: Project[] = [
  {
    title: 'Restaurant Website',
    category: 'Hospitality',
    desc: 'A warm, appetising website with an online menu, reservations and gallery for a family restaurant.',
    tags: ['UI Design', 'Responsive', 'SEO'],
    image:
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-amber-400/30 to-brand-500/30',
  },
  {
    title: 'Gym Website',
    category: 'Fitness',
    desc: 'Bold, high-energy site with class schedules, trainer profiles and membership plans.',
    tags: ['Landing Page', 'Animations', 'Booking'],
    image:
      'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-emerald-400/30 to-brand-500/30',
  },
  {
    title: 'School Website',
    category: 'Education',
    desc: 'A trustworthy, parent-friendly site with admissions, faculty and events sections.',
    tags: ['Multi-page', 'CMS-ready', 'Responsive'],
    image:
      'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-sky-400/30 to-brand-500/30',
  },
  {
    title: 'Medical Clinic Website',
    category: 'Healthcare',
    desc: 'Clean, calming clinic site with services, doctor profiles and appointment enquiries.',
    tags: ['UI Design', 'Forms', 'SEO'],
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-cyan-400/30 to-brand-500/30',
  },
  {
    title: 'Portfolio Website',
    category: 'Personal Brand',
    desc: 'A minimal, elegant portfolio with smooth animations and a project showcase.',
    tags: ['Animations', 'Minimal', 'Fast'],
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-violet-400/30 to-brand-500/30',
  },
  {
    title: 'Local Business Website',
    category: 'Local Brand',
    desc: 'A complete online presence for a local shop with location, hours and contact.',
    tags: ['Local SEO', 'Maps', 'Responsive'],
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-rose-400/30 to-brand-500/30',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
};
export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Anjali Verma',
    role: 'Verma Clinic, Indore',
    quote:
      'Palak built a clean, professional website for our clinic in record time. Patients now find us easily online and the appointment form works flawlessly.',
    avatar:
      'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Rohit Sharma',
    role: 'Founder, FitLife Gym',
    quote:
      'The energy of our new website matches our brand perfectly. Memberships enquiries doubled within the first month. Highly recommended.',
    avatar:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Meera Nair',
    role: 'Principal, Sunrise School',
    quote:
      'A trustworthy, parent-friendly website with all our admissions info. Palak understood our needs and delivered more than we expected.',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Karan Mehta',
    role: 'Owner, Spice Route Restaurant',
    quote:
      'Our online menu and reservation flow look stunning on mobile. The whole process was smooth, affordable and genuinely fun to work on.',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Sneha Kapoor',
    role: 'Freelance Photographer',
    quote:
      'My portfolio finally feels like me — minimal, fast and elegant. The animations are subtle and the site loads instantly on any phone.',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Aditya Joshi',
    role: 'Co-founder, LocalCart Startup',
    quote:
      'For an early-stage startup, pricing mattered. Palak delivered a modern landing page that helped us raise our pre-seed round. Will work again.',
    avatar:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
];

export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  {
    q: 'How much does a website cost?',
    a: 'Pricing depends on the scope — number of pages, features and design complexity. I keep packages affordable for small businesses and startups, and you\u2019ll always get a clear quote upfront after a free consultation.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A simple landing page can be ready in 2\u20134 days. A full multi-page business website typically takes 1\u20132 weeks. Timelines are confirmed before we start, and I share progress updates throughout.',
  },
  {
    q: 'Do you work with clients outside Indore?',
    a: 'Yes. I work online with clients across India. Communication happens over WhatsApp, email and video calls, so location is never a barrier.',
  },
  {
    q: 'Will my website work on mobile phones?',
    a: 'Absolutely. Every website I build is mobile-first and fully responsive, so it looks and works great on phones, tablets and desktops alike.',
  },
  {
    q: 'Do you offer support after the website is live?',
    a: 'Yes. I offer ongoing maintenance plans for updates, backups, security and content changes, so your site stays fast and fresh after launch.',
  },
  {
    q: 'What is AI-assisted website creation?',
    a: 'I use generative AI tools and prompt engineering to speed up research, copywriting, imagery and layout ideas \u2014 which means faster delivery and lower costs, without compromising on design quality.',
  },
];

export const contact = {
  phone: '+91 9179582419',
  phoneRaw: '919179582419',
  email: 'palakweb213@gmail.com',
  linkedin: 'Palak Solanki',
  linkedinUrl: 'https://www.linkedin.com/in/palak-solanki-659b88422',
  location: 'Indore, Madhya Pradesh, India',
  availability: [
    'Open for Freelance Projects',
    'Available Online Across India',
    'Available for Local Projects in Indore',
  ],
};
