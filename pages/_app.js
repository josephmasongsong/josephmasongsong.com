import React from 'react'
import App from 'next/app'
import Router from "next/router";
import withGA from "next-ga";
import { FormspreeProvider } from '@formspree/react';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return <FormspreeProvider project={process.env.FORMSPREE_PROJECT_ID}><Component {...pageProps} /></FormspreeProvider>
  }
}

export default withGA("UA-150837765-1", Router)(MyApp)
