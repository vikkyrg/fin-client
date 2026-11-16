/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          blue: '#174A8B',
          blueDark: '#0F3463',
          blueLight: '#215DAA',
          green: '#159B69',
          greenDark: '#0F7850',
          greenLight: '#E8F7F0',
          orange: '#F28C28',
          orangeHover: '#DC7815',
          orangeLight: '#FEF4EA',
        },
        navy: {
          50: '#F0F4F9',
          100: '#D9E3EF',
          200: '#B3C6DF',
          300: '#8DAACF',
          400: '#527EBA',
          500: '#174A8B',
          600: '#143F77',
          700: '#103463',
          800: '#0C284E',
          900: '#081D3A',
          950: '#041021',
        }
      }
    },
  },
  plugins: [],
}
