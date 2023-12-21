/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#AD1FEA",
        blue: "#4661E6",
        lightBlack: "#4661E6",
        darkGray: "#F2F4FF",
        lightGray: "#F7F8FD",
        gray: "#647196",
        darkBlue: "#3A4374",
        orange: "#F49F85",
        lightBlue: "#62BCFA",
        red: "#D73737",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '960px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};