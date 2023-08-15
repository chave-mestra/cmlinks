import Head from 'next/head'
import { Inter } from 'next/font/google'
import Gamificacao from '../components/Gamificacao'

const font = Inter({ subsets: ['latin'], weight:['200','400','600','700','800','900'] })

export default function GamificacaoPage() {

  return (
    <div className={font.className}>

      <Head>
        <title>Chave-Mestra Gamificação</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Gamificacao/>

    </div>
  )
}
