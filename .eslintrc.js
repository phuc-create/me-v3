module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs,ts}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'template-curly-spacing': 'off',
    'no-template-curly-in-string': 'off',
    indent: 'off',
    camelcase: 'off',
    'no-return-assign': 'off',
    'one-var': 'off',
    'no-prototype-builtins': 'warn',
    'prefer-promise-reject-errors': 'off',
    'standard/object-curly-even-spacing': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'warn',
    'react/no-unused-prop-types': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-handler-names': 'off',
    // "react-hooks/exhaustive-deps": "off",
    'react/jsx-indent-props': [2, 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        trailingComma: 'none',
        semi: false,
        endOfLine: 'auto',
        tabWidth: 2,
        printWidth: 80,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: false
      }
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
}
