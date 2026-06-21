/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./prompt.html",
    "./claude/src/**/*.{js,ts,jsx,tsx}",
    "./antigravity/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-navy': '#1B2A4A',
        'raw-paper': '#F2E8D5',
        'toasted-wood': '#8C5A3C',
        'rust-copper': '#B5562F',
        'rope-natural': '#C9B896',
        navy: '#1B2A4A',
        paper: '#F2E8D5',
        wood: '#8C5A3C',
        rust: '#B5562F',
        rope: '#C9B896',
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
