/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a3ff',
          500: '#3380fc',
          600: '#1f60f1',
          700: '#1849dc',
          800: '#1a3cb2',
          900: '#1b378c',
          950: '#142355',
        },
        ink: {
          50: '#f6f8fb',
          100: '#eceff5',
          200: '#d5dae6',
          300: '#b0bbcd',
          400: '#8593ad',
          500: '#677591',
          600: '#525e78',
          700: '#434c61',
          800: '#3a4252',
          900: '#0f172a',
          950: '#0a1120',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(31, 96, 241, 0.18)',
        glass: '0 8px 32px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(31,96,241,0.18), 0 20px 60px -20px rgba(31,96,241,0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%), radial-gradient(circle at 1px 1px, rgba(31,96,241,0.12) 1px, transparent 0)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        shimmer: 'shimmer 1.6s infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
