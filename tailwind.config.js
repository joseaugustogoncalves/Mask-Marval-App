/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ec131e",
        "background-light": "#f8f6f6",
        "background-dark": "#000000",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
