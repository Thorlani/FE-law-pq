/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#50897C",
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  plugins: [],
}
