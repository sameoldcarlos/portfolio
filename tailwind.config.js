/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    colors: {
      'primary-text': 'var(--text-primary)',
      'secondary-text': 'var(--text-secondary)',
      'primary-bg': 'var(--background-primary)',
      'secondary-bg': 'var(--background-secondary)',
      'primary-accent': 'var(--highlight-primary)',
      'secondary-accent': 'var(--highlight-secondary)'
    },
    fontFamily: {
      'primary': 'var(--primary-font-family)',
      'secondary': 'var(--secondary-font-family)',
    },
  },
  plugins: [],
};
