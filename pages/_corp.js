import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/cm-corp-blue.svg'

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

        <Link href="https://www.instagram.com/cmgamificacao/">
          <h1>@cmgamificacao</h1>
        </Link>

        <div className="grid">

            <Link className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSeQ4owwBou3aCrEKWATo0-ZdXnpDcPj-J0XGWkla822R1y1kA/viewform">
                Curso de Gamificação
            </Link>
            
            <Link className="link" href="http://www.chavemestra.net/gamificacao">
                Site Chave-Mestra
            </Link>

            <Link className="link" href="mailto:thais@chavemestra.net">
                Email de Contato
            </Link>

            <Link className="link" href="https://api.whatsapp.com/send?phone=555432951788">
                Whatsapp
            </Link>

            <Link className="link" href="https://chavemestra.net/corporativo/cases">
                Artigos
            </Link>

        </div>

      </main>

    </div>
  )
}
