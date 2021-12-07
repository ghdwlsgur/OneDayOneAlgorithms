module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': 'error',
  },
};
