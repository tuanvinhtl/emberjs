/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{hbs,html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: 'var(--primary)',
      'p—light': 'var(--p—light)',
      'p—dark': 'var(--p—dark)',
      secondary: 'var(--secondary)',
      's—light': 'var(--s—light)',
      's—dark': 'var(--s—dark)',
      'p-text': 'var(--p-text)',
      's-text': 'var(--s-text)',
    },
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        '4xl': '0 0.125rem 0.5rem 0.125rem rgb(218 224 232 / 75%)',
      },
    },
  },
  plugins: [],
};
