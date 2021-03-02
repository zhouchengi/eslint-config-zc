module.exports = {
  extends: ['./base.js'],
  overrides: [
    {
      files: ['demo/react.jsx'],
      extends: ['./react.js']
    },
    {
      files: ['demo/react.tsx'],
      extends: ['./react.js', './typescript.js']
    },
    {
      files: ['demo/vue.vue'],
      extends: ['./vue.js']
    }
  ]
}
