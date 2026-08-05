/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './locales/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy/indigo — hero and dark bands
        navy: {
          50: '#eeedf7',
          100: '#d5d3ec',
          200: '#aaa6d8',
          300: '#7f7ac4',
          400: '#544db0',
          500: '#3b3492',
          600: '#2e2871',
          700: '#1e1b4b',
          800: '#161334',
          900: '#0e0c20',
        },
        // Warm cream — alternating light sections
        cream: {
          50: '#fefdfb',
          100: '#faf7f2',
          200: '#f3ece1',
          300: '#e8ddcb',
          400: '#d9c8ac',
          500: '#c4ac86',
        },
        // Gold/amber — CTAs and highlights
        gold: {
          50: '#fdf8ec',
          100: '#f9edcd',
          200: '#f2d998',
          300: '#e9c163',
          400: '#dfa93c',
          500: '#c8912a',
          600: '#a67322',
          700: '#82581e',
          800: '#5c3e17',
          900: '#3a2710',
        },
        // Reserved exclusively for WhatsApp actions
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1da851',
        },
        pillar: {
          timing: '#e9c163',
          space: '#7f9e8b',
          name: '#c4ac86',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        telugu: ['var(--font-telugu)', 'var(--font-inter)', 'sans-serif'],
        brand: ['var(--font-cinzel)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
