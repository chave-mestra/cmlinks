import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/cm-corp-blue.svg'

export default function PersonalProfile(props) {
  return (
    <div className="container blue">
      <Head>
        <title>Chave-Mestra - {props.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className="photo-wrapper">
            <Image src={Logo} layout="fill" className="photo"/>
        </div>

        <h1>{props.name}</h1>

        <div className="grid">

            <Link href={`https://api.whatsapp.com/send?1=pt_BR&phone=${props.whats}`}>
                <a className="link"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a>
            </Link>

            <Link href={props.linkedin}>
                <a className="link"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </Link>

            <Link href="http://www.chavemestra.net/">
                <a className="link"><i className="fa-solid fa-link"></i> Site Chave-Mestra</a>
            </Link>

        </div>

        <div className="bottom-logo-wrapper">
            <Image src={Logo} layout="fill" className="logo"/>
        </div>

      </main>

    </div>
  )
}
