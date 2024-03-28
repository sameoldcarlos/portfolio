/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  rules: {
    'vue/html-indent': ['error', 2],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  }
};
