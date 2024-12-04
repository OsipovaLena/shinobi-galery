import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'semi': 1,
      'prefer-const': 1,
      'semi-spacing': 1,
      'multiline-ternary': ['error', 'always'],
      'object-property-newline': 'error',
      'object-curly-newline': ['error', { multiline: true }],
      'no-whitespace-before-property': 'error',
      'spaced-comment': ['error', 'always'],
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      "no-multiple-empty-lines": ["error", {
 max: 1,
maxEOF: 0,
maxBOF: 0 
}]
    },
  },
];
