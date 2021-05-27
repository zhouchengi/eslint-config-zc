module.exports = {
  extends: ['plugin:react/all'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/forbid-component-props': 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-child-element-spacing': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-depth': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore'
      }
    ],
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/prop-types': 0,
    'react/require-optimization': 0,
    'react/state-in-constructor': 0
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53' // Flow version
    }
  }
}
