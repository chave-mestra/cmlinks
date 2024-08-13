import React from 'react';
import App from 'next/app';
import Script from 'next/script';
import GoogleAnalitics from '../components/TagManger';
import '../styles/styles.scss';

export default class MyApp extends App {
	constructor(props) {
		super(props); // Chama o construtor da classe base
		this.analitics = new GoogleAnalitics();
	}
	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				{this.analitics.build()}
				<Script src="https://kit.fontawesome.com/b73a956a41.js" />
				<Component {...pageProps} />
			</>
		);
	}
}
