module.exports = {
  env: {
    browser: false,
    es6: true,
  },
  extends: ['@imaginary-cloud/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    fetch: false,
    window: true,
    localStorage: true,
    document: true,
    IntersectionObserver: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-array-index-key': 'warn',
    'import/named': 'off',
    'no-nested-ternary': 'off',
    'import/no-useless-path-segments': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'no-debugger': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
  },
}
