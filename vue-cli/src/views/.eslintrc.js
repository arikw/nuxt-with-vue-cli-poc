module.exports = {
  root: false,
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'filenames/match-regex': [2, '^[0-9A-Za-z-\\.]+$', true]
  }
};
