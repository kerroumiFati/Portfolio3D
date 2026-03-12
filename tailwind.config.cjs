/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#000000",
        secondary: "#c8c8d0",
        tertiary: "#1a1a1a",
        accent: "#C71585",
        "black-100": "#111111",
        "black-200": "#0a0a0a",
        "white-100": "#f8f9fa",
        teal: "#C71585",
        "teal-light": "#FF1493",
        coral: "#C71585",
        "coral-light": "#FF1493",
        slate: "#1a1a1a",
        "slate-light": "#2a2a2a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #18534F",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
