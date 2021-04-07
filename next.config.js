const withCSS = require('@zeit/next-css')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withCSS({
  target: 'serverless',
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  },
  env: {
    FORMSPREE_PROJECT_ID: process.env.FORMSPREE_PROJECT_ID,
    FORMSPREE_DEPLOY_KEY: process.env.FORMSPREE_DEPLOY_KEY,
    PRISMIC: process.env.PRISMIC
  }
})
