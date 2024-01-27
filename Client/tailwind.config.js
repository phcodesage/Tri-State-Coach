/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fffced",
        darkgray: "#9d9d9d",
        white: "#fff",
        darkkhaki: "#908345",
        gray: {
          "100": "#fcfcfc",
          "200": "#7a7a7a",
          "300": "#192636",
        },
        brown: "#a13d3d",
        black: "#000",
        darkred: "#991616",
        blanchedalmond: "#eae2bf",
        wheat: "rgba(220, 212, 171, 0.43)",
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
      xl: "20px",
      "5xl": "24px",
      base: "16px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
 ],
}