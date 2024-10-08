/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'cerise-red': {
        '50': '#fef1f7',
        '100': '#fee5f0',
        '200': '#fecce3',
        '300': '#ffa2cb',
        '400': '#fe68a7',
        '500': '#f83c86',
        '600': '#e91f64',
        '700': '#ca0c47',
        '800': '#a70d3b',
        '900': '#8b1034',
        '950': '#55021a',
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark"],
  },
}

