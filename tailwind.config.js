/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D8252F',
          dark: '#B81E27',
          light: '#E54A52',
        },
        secondary: {
          DEFAULT: '#2B3B7C',
          dark: '#1E2A5A',
          light: '#3D4F9A',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
