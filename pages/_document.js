import Document, { Html, Head, Main, NextScript } from 'next/document'
import Router from "next/router";
import withGA from "next-ga";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default withGA("UA-150837765-1", Router)(MyDocument)
