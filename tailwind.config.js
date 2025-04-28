const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        gradientStart: "#7A3DE2",
        gradientEnd: "#43217C",
      },
    },
  },
  plugins: [],
};
