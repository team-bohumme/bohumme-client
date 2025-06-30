module.exports = {
  env: { browser: true, es2020: true },
  extends: ['../../config/eslint/.eslintrc.cjs', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
};
