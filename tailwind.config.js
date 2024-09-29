/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tint: "rgb(59, 130, 143)",
        beige: "rgb(240, 240, 235)",
      },
      fontFamily: {
        pop: ["Poppins"],
      },
    },
  },
  plugins: [],
};
