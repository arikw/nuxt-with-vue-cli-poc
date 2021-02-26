module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': ['function', 'if', 'each', 'for', 'include', 'mixin']
    }]
  },
  ignoreFiles: ['**/node_modules/**/*']
};
