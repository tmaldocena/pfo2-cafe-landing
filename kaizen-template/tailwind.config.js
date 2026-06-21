/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0C0C",
        terracotta: "#C97A4A",
        cream: "#EDE3D3",
        brown: "#4A2E1F",
        navy: "#1F3A5F",
        gold: "#B8862E",
      },
      fontFamily: {
        sans: ["'Zen Kaku Gothic New'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

