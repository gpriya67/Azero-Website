/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FB1E01',
        
      },
       fontFamily: {
        aileron: ["Aileron", "sans-serif"],
        clash: ["Clash", "sans-serif"],
      },
    },
  },
  plugins: [],
}
