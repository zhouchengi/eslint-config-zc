module.exports = {
  extends: ['./base.js'],
  overrides: [
    {
      files: ['demo/react.jsx'],
      extends: ['./react.js']
    },
    {
      files: ['demo/vue.js'],
      extends: ['./vue.js']
    }
  ]
}
