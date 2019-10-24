import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

const HeadContent = ({ doc }) =>
  <Head>
    <title>{RichText.asText(doc.title)} - josephmasongsong.com</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta name="description" content={RichText.asText(doc.meta_description)} />
    <meta property="og:title" content={RichText.asText(doc.title)} />
    <meta property="og:image" content={doc.open_graph_image.url} />
    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
  </Head>

export default HeadContent
