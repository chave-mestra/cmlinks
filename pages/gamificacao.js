import Head from 'next/head'
import { Inter } from 'next/font/google'
import Gamificacao from '../components/Gamificacao'

const font = Inter({ subsets: ['latin'], weight:['200','400','600','700','800','900'] })

export default function Gamificacao() {

  return (
    <div className={font.className}>

      <Head>
        <title>Chave-Mestra Gamificação</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet" />
      </Head>

      <Gamificacao/>

    </div>
  )
}
