// INFO: https://eslint.org/docs/user-guide/configuring
// INFO: https://eslint.org/docs/rules/

module.exports = {
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },

  // INFO: The order of these matters.
  extends: [
    // INFO: https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app
    'react-app', //

    // INFO: https://eslint.org/docs/rules/
    'eslint:recommended',

    // INFO: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',

    // INFO: https://github.com/yannickcr/eslint-plugin-react
    'plugin:react/recommended',

    // INFO: https://github.com/benmosher/eslint-plugin-import
    'plugin:import/errors',

    // INFO: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended', //

    // INFO: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb', //
    'airbnb/hooks', //

    // INFO: https://github.com/prettier/eslint-plugin-prettier
    // INFO: https://github.com/prettier/eslint-config-prettier
    // This needs to be last so it gets the chance to override other configs.
    'plugin:prettier/recommended',
  ],

  rules: {
    // INFO: https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,

    // INFO: https://github.com/benmosher/eslint-plugin-import
    'import/first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
  },
};
