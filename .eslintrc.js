module.exports = {
  extends: [
    'plugin:storybook/recommended',
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'prettier'
  ],

  plugins: ['jest', 'prettier'],
  env: {
    'jest/globals': true
  },
  globals: {
    React: 'readonly'
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error'
      }
    }
  ],
  rules: {
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  }
};
