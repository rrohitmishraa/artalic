/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tint: "rgb(59, 130, 143)",
      },
      fontFamily: {
        pop: ["Poppins"],
      },
      backgroundImage: {
        bgImage: "url('/public/arts/bg.webp')",
      },
    },
  },
  plugins: [],
};
