/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 10px #000',
      },
      backgroundImage: {
        close: 'url(/images/close.png)',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
