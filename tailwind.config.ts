import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f2ed',
          100: '#e6e0d6',
          200: '#e0d9cd',
          300: '#d4cbbf',
          400: '#b8ad9e',
          500: '#8a7e6f',
          600: '#5c5244',
          700: '#3b332b',
          800: '#2a241e',
          900: '#1a1612',
          950: '#0d0b09',
        },
        gold: {
          50: '#fdf6ee',
          100: '#faecda',
          200: '#f3d5af',
          300: '#e8b97e',
          400: '#d9a05c',
          500: '#c8873e',
          600: '#a96d2e',
          700: '#8a5626',
          800: '#6f4520',
          900: '#5b391c',
        },
        forest: {
          50: '#f4f5f0',
          100: '#e3e6db',
          200: '#c8cdb9',
          300: '#a8b193',
          400: '#8b9672',
          500: '#6e7a56',
          600: '#566244',
          700: '#434c36',
          800: '#353d2c',
          900: '#2a3124',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
