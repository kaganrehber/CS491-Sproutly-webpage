/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#52C97A',
          500: '#3bb968',
          600: '#2d9651',
          700: '#1B6E3A',
          800: '#165a2f',
          900: '#14532d',
        },
        surface: '#FAFAF7',
        ink: '#20251F',
        gold: '#FFC107',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
