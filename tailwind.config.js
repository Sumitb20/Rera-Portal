/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'pr-bg': '#0B1120',
        'pr-card': '#1E293B',
        'pr-card-elevated': '#243347',
        'pr-border': '#2D3F55',
        'pr-border-hover': '#4A6080',
        'pr-amber': '#F59E0B',
        'pr-amber-light': '#FCD34D',
        'pr-amber-dark': '#D97706',
        'pr-muted': '#64748B',
        'pr-muted-light': '#94A3B8',
        'pr-success': '#10B981',
        'pr-danger': '#EF4444',
        'pr-blue': '#3B82F6',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.35)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.5)',
        'modal': '0 20px 60px rgba(0,0,0,0.6)',
        'amber-glow': '0 0 20px rgba(245,158,11,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.25s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
