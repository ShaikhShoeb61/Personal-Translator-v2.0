/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define custom font families
      fontFamily: {
        hindi: 'Tiro Devanagari Hindi, serif', // Hindi font family
        urdu: 'Noto Nastaliq Urdu, serif'      // Urdu font family
      },
      // Define custom colors
      colors: {
        // Green palette
        customgreen: {
          50: '#f5f5f5', // Lightest shade, used for hover
          500: '#4caf50', // Primary color
        },
        // Grey palette
        customgray: {
          200: '#C1C1C1',  // Extra lighter of gray
          300: '#7C7F81', // Lighter shade of grey
          400: '#636669', // Hover color variant
          500: '#3C4043', // Secondary color
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),  // default: 'standard'
  ],
}

