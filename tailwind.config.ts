import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        'bg-card': 'var(--bg-card)',
        'bg-card-alt': 'var(--bg-card-alt)',
        'accent-indigo': 'var(--accent-indigo)',
        'accent-emerald': 'var(--accent-emerald)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
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
