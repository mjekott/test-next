/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1440px'
    },
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        'brand-900': '#620083',
        'brand-800': '#9900CC'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('prettier-plugin-tailwindcss')
  ]
};
