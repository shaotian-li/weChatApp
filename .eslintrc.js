module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-extra-boolean-cast': 0,
    'no-extend-native': ['error', { exceptions: ['Number'] }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
};
