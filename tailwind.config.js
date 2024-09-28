/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tint: "rgb(59, 130, 143)",
        beige: "rgb(236, 234, 226)",
      },
      fontFamily: {
        pop: ["Poppins"],
      },
    },
  },
  plugins: [],
};
