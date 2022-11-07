/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "40em",
      md: "48em",
      lg: "64em",
      xl: "75em",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      accent: "#00CDB4",
      textGray: "#D4D4D4",
      dimGray: "#C2C2C2",
      bgColor: "#001721",
      cardBgColor: "#002C3E",
      text: "#474747",
      transparent: "transparent",
    },
    fontFamily: {
      mohave: ["Mohave", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      cursive: ["Annie Use Your Telescope", "cursive"],
    },
    fontSize: {
      xs: "0.875rem",
      sm: "1.125rem",
      md: "1.375rem",
      lg: "1.5rem",
      xl: "clamp(1.75rem,0.5vw,2rem)",
      "2xl": "clamp(2rem,10vw,2.25rem)",
      "3xl": "clamp(3rem,10vw,4rem)",
      "4xl": "clamp(4rem,10vw,4.5rem)",
    },
    extend: {},
  },
  plugins: [],
};
