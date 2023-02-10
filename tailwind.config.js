/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "21f": "repeat(2, minmax(300px, 1fr))",
      },
      fontFamily: {
        sans: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [],
};
