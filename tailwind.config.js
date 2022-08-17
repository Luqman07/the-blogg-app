/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'dark-mode': '#0F172A',
      'grey': '#f1f1f1',
      'darkBackground': '#1E293B',
      'white': '#ffffff',
      'lightGray': '#E6E6E6',
      'black': '#000000',
      'deepGray': '#cccccc'
    },
    extend: {},
  },
  plugins: [],
}
