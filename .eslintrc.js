module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    'import/extensions': 'off',
  },
};
