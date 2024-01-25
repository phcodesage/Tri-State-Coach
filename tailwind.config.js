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
        brown: {
          "100": "#bf3d3d",
          "200": "#a13d3d",
        },
        white: "#fff",
        gray: {
          "100": "#fcfcfc",
          "200": "#7a7a7a",
          "300": "#192636",
        },
        darkkhaki: "#908345",
        darkolivegreen: "#78692b",
        darkgray: "#9d9d9d",
        black: "#000",
        darkred: "#991616",
        wheat: "rgba(220, 211, 171, 0.43)",
        blanchedalmond: "#eae2bf",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "palatino-linotype": "'Palatino Linotype'",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      "19xl": "2.38rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "10xl": "1.81rem",
      "29xl": "3rem",
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
