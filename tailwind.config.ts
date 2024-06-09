const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const colors = ['brand', 'teal'];
const shades = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

const colorMap: { [key: string]: string } = colors.reduce((acc: { [key: string]: string }, color) => {
  shades.forEach(shade => {
    acc[`${color}-${shade}`] = `var(--${color}-${shade})`;
  });
  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: colorMap,
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
