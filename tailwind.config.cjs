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
        primary: "#0f1a1c",
        secondary: "#c9716d",
        tertiary: "#1a2d31",
        accent: "#a8032a",
        "black-100": "#18534F",
        "black-200": "#0d2624",
        "white-100": "#f8f9fa",
        teal: "#18534F",
        "teal-light": "#26716b",
        coral: "#77021D",
        "coral-light": "#a8032a",
        slate: "#26474E",
        "slate-light": "#3d6169",
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
