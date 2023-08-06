/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        changa: ["Changa", "sans-serif"],
        "press-start": ['"Press Start 2P"', "cursive"],
        "black-ops": ['"Black Ops One"', "cursive"],
      },
      colors: {
        default: "#fdfffc",
        btngradient:
          "linear-gradient(to right top, #5f1611, #8d4008, #ad7300, #b8ad00, #a8eb12)",
      },
      letterSpacing: {
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
