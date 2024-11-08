/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        sans: ["Roboto", "sans-serif"] 
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
      colors: {
        lightgrey: "#667085",
        bluish: "#1D5c9a",
      },
    },
  },
  plugins: [],
};
