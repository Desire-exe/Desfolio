import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#0B0708',
        surface:       '#140D0F',
        'surface-2':   '#1C1214',
        border:        'rgba(255, 80, 80, 0.10)',
        text:          '#F5EDEE',
        'text-muted':  '#9A8A8C',
        accent:        '#FF3B3B',
        'accent-soft': '#FF6B4A',
      },
      fontFamily: {
        sans:  ['Geist', 'ui-sans-serif', 'system-ui'],
        serif: ['Instrument Serif', 'ui-serif', 'Georgia'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        ember:      '0 0 40px rgba(255, 59, 59, 0.35)',
        'ember-sm': '0 0 16px rgba(255, 59, 59, 0.25)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        gradient: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 3s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config