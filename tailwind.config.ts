import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0f172a',
        'bg-card': '#1e293b',
        'bg-card-alt': '#334155',
        'accent-indigo': '#4f46e5',
        'accent-emerald': '#10b981',
        'text-primary': '#f1f5f9',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        code: ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
