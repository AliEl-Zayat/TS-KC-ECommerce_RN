module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'object-curly-spacing': 'off',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
  },
};
