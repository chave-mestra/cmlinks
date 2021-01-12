import React from 'react'
import Head from 'next/head'
import App from 'next/app'

import '../styles/styles.css'

export default class MyApp extends App {

  render(){

    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}