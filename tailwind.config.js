/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ecf0f1',
        principal: '#056CF2',
        secondary: '#0540F2',
        text: '#ecf0f1',
        whatsApp: '#08C040',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

