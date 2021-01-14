import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo_blue.svg'

export default function Corporativo() {
  return (
    <div className="container blue">

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

        <Link href="https://www.instagram.com/chavemestracorp/">
          <a><h1>@chavemestracorp</h1></a>
        </Link>

        <div className="grid">

            <Link href="mailto:thais@chavemestra.net">
                <a className="link">Email de Contato</a>
            </Link>
            
            <Link href="http://www.chavemestra.net/empresas">
                <a className="link">Site Chave-Mestra</a>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=5551981285704">
                <a className="link">Whatsapp</a>
            </Link>

            <Link href="https://www.youtube.com/watch?v=mqX596Yy_kU&feature=youtu.be">
                <a className="link">Video Escape GO</a>
            </Link>

        </div>

      </main>

    </div>
  )
}
