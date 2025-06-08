/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#706FE5",
      secondary: "#EAEAFC",
      footer: "#2E3E5C",
      cmrbolsa: "#328077",
      verdeClaro: "#31857E",
      gris: "#F3F4F6",
      fondosClaros: "#F2EFEC",
    },
  },

variants: {
  extend: {
    transitionProperty: ['hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce'],
  },
},
plugins: [],
};
export const plugins = [];

