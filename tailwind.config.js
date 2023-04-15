/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)',
        grid: 'url(/src/assets/grid-background.svg)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        white: '#FFFFFF',
        blue: {
          300: '#81D8F7',
          500: '#75BEFF',
          700: '#0366D6',
        },
        gray: {
          100: '#E1E1E6',
          200: '#A9A9B2',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          900: '#00291D',
        },
      },
    },
  },
  plugins: [],
}
