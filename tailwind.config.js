const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF UI Text"', ...defaultTheme.fontFamily.sans],
        chronicle: ['"Chronicle Display"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
