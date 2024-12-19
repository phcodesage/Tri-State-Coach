/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fffced",
        brown: "#a13d3d",
        white: "#fff",
        gray: {
          "100": "#7a7a7a",
          "200": "#192636",
        },
        darkkhaki: "#908345",
        darkolivegreen: "#78692b",
        darkgray: "#9d9d9d",
        gainsboro: "#d9d9d9",
        palegoldenrod: "#fff3b8",
        black: "#000",
        blanchedalmond: "#eae2bf",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "palatino-linotype": "'Palatino Linotype'",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
