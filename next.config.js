const withCSS = require('@zeit/next-css')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withCSS({
    webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  },
  target: 'serverless',
  env: {
    STATICKIT: process.env.STATICKIT,
    PRSIMIC: process.env.PRISMIC,
    build: {
      STATICKIT: process.env.STATICKIT,
      PRSIMIC: process.env.PRISMIC
    }
  }
})
