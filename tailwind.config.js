/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        'bg-secondary': 'var(--bg-secondary)',
        'brand-yellow': {
          DEFAULT: 'var(--brand-yellow)',
          soft: 'var(--brand-yellow-soft)',
        },
        'brand-purple': {
          DEFAULT: 'var(--brand-purple)',
          dark: '#4D1273',
          light: '#9E32DC',
        },
        'brand-magenta': 'var(--brand-magenta)',
        'brand-blue': 'var(--brand-blue)',
        'brand-green': 'var(--brand-green)',
        'fg-base': 'var(--fg-base)',
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px -5px rgba(255, 215, 0, 0.4)',
        'glow-purple': '0 0 30px -5px rgba(122, 32, 176, 0.5)',
        'glow-blue': '0 0 25px -5px rgba(0, 210, 255, 0.4)',
        'glow-magenta': '0 0 25px -5px rgba(240, 0, 184, 0.4)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(122, 32, 176, 0.35) 0%, rgba(8, 9, 13, 1) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #7A20B0 0%, #00D2FF 50%, #F000B8 100%)',
      },
    },
  },
  plugins: [],
};
