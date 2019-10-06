
import React from 'react'
import Prismic from 'prismic-javascript'
import { linkResolver } from '../helpers'

const endPoint = process.env.PRISMIC

export default class Preview extends React.Component {
  static async getInitialProps (context) {
    const token = context.query.token
    const { req, res } = context

    const API = await Prismic.getApi(endPoint, { req })
    const url = await API.previewSession(token, linkResolver, '/')

    res.writeHead(302, { Location: url })
    res.end()
    return {}
  }

  render () {
    return <div>Preview</div>
  }
}
