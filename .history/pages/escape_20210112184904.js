import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo_yellow.svg'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chave-Mestra Escape Game</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className="logo-wrapper">
            <Image src={Logo} layout="fill" className="logo"/>
        </div>

        <h1>@chavemestraescape</h1>

        <div className="grid">

            <Link href="http://www.chavemestra.net/">
                <a className="link">Site Chave-Mestra</a>
            </Link>

            <Link href="https://api.whatsapp.com/send?1=pt_BR&phone=5551992337112">
                <a className="link">Whatsapp</a>
            </Link>

            <Link href="http://www.instagram.com/chavemestracorp">
                <a className="link">Jogos Corporativos</a>
            </Link>

        </div>

      </main>

    </div>
  )
}
