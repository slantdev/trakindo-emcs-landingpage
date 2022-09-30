const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
        chronicle: ['"Chronicle Display"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
