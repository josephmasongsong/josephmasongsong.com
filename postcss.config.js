const purgecss = require('@fullhuman/postcss-purgecss')({

  content: [
    './pages/*.js',
    './components/*.js',
    './components/slices/*.js',
  ],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || []
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
