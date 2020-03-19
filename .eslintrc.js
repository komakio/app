module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/no-explicit-any': 0,
    'react/prop-types': 0,
    // '@typescript-eslint/interface-name-prefix': 0,
    'react/display-name': 0,
    // '@typescript-eslint/no-use-before-define': 0,
    // '@typescript-eslint/camelcase': 0,
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/ban-ts-ignore': 0,
    // 'prefer-const': [
    //   'error',
    //   {
    //     destructuring: 'any',
    //     ignoreReadBeforeAssign: false,
    //   },
    // ],
    // eqeqeq: ['error', 'always'],
    // '@typescript-eslint/no-this-alias': 0,
    // 'prefer-rest-params': 0,
    // '@typescript-eslint/explicit-member-accessibility': [
    //   'error',
    //   { accessibility: 'explicit', overrides: { constructors: 'no-public' } },
    // ],
    // 'no-duplicate-imports': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
