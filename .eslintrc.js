const path = require('path');
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },

  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:security/recommended',
    'plugin:vue-scoped-css/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components-lib', path.resolve(__dirname, './components/lib')]
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    }
  },
  plugins: [
    'security',
    'filenames'
  ],
  rules: {
    'no-tabs': 'warn',
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'eol-last': 'off',
    'no-undef': 'warn',
    'semi': ['error', 'always'],
    'no-console': 'off',
    'no-useless-escape': 'off',
    'no-empty': 'off',
    'camelcase': ['warn', { properties: 'never' }],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'block-spacing': ['warn', 'always'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['warn', 'last'],
    'comma-dangle': ['warn', 'never'],
    'curly': ['warn'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'no-mixed-operators': ['warn', { allowSamePrecedence: false }],
    'operator-linebreak': ['warn', 'after'],
    'object-curly-newline': ['warn', { consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-newline': ['warn', 'consistent'],
    'semi-spacing': 'warn',
    'space-before-blocks': ['warn', 'always'],
    'space-infix-ops': ['warn', { int32Hint: false }],
    'space-unary-ops': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-whitespace-before-property': 'warn',
    'switch-colon-spacing': 'error',
    'key-spacing': ['warn'],
    'keyword-spacing': ['warn', { before: true }],
    'space-before-function-paren': [
      'warn',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'no-param-reassign': 'error',

    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    'security/detect-object-injection': ['off'],
    'filenames/match-regex': [2, '^[a-z.]{1}[a-z0-9]*(-[a-z]{1}[a-z0-9]*)*(\\.?[a-z0-9])*$', true],
    'filenames/match-exported': ['off'],
    'filenames/no-index': ['off'],
    'no-prototype-builtins': 'off'
  },
  globals: {
    window: 'readonly',
    localStorage: 'readonly',
    $nuxt: 'readonly'
  }
};
