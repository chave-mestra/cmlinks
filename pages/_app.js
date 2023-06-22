import React from 'react'
import App from 'next/app'
import Script from 'next/script'

import '../styles/styles.scss'

export default class MyApp extends App {

  render(){

    const { Component, pageProps } = this.props

    return <> 
      <Script src="https://kit.fontawesome.com/b73a956a41.js"/>
      <Component {...pageProps} />
    </>
    
  }
}