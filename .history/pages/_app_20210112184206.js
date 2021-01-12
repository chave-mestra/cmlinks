import React from 'react'
import Head from 'next/head'
import App from 'next/app'

import '../styles/styles.css'

export default class MyApp extends App {

  render(){

    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />
    </Head>

    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}