module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'max-len': ['error', { code: 120, ignoreTrailingComments: true }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};
