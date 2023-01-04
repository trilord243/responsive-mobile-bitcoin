/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      "bitcoin-orange": "#f7931a",
      "soft-orange": "#ffe9d5",
      "secondary-blue": "#1a9af7",
      "soft-blue": "#e7f5ff",
      "warm-black": "#282623",
      black: "#201e1c",
      grey: "#bababa",
      "off-white": "#faf8f7",
      "just-white": "#fff",
    },
    extend: {
      fontFamily: {
        DMsans: ["DM Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: { arrow: "url('./assets/icons/down-arrow.svg')" },
    },
  },
  plugins: [],
};
