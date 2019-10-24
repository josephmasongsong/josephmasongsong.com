const purgecss = require('@fullhuman/postcss-purgecss')({

  content: [
    './pages/*.js',
    './components/*.js',
    './components/slices/*.js',
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
