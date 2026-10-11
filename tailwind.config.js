/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vega: {
          light: '#F5F5F7',
          dark: '#393E46',
          purple: '#512B81',
          lavender: '#A084DC',
          'deep-blue': '#3559E0',
          'electric-blue': '#0F62FE',
          sand: '#D2C1B0',
          'soft-blue': '#8CABFF',
        },
        'vega-light': '#F5F5F7',
        'vega-dark': '#393E46',
        'vega-purple': '#512B81',
        'vega-lavender': '#A084DC',
        'vega-deep-blue': '#3559E0',
        'vega-electric-blue': '#0F62FE',
        'vega-sand': '#D2C1B0',
        'vega-soft-blue': '#8CABFF',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
