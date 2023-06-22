import React from 'react'
import styles from './CmProfile.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'react-lottie'
import trophy from '../public/lottie/trophy.json'

export default function CmProfile() {

    const trophyOptions = {
        loop: true,
        autoplay: true,
        animationData: trophy,
        rendererSettings: { 
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <div className={`${styles.cmProfile} blue`}>

            {/* <div className={styles.abrh}>
                <div className={styles.trophy}>
                    <Lottie options={trophyOptions} height={'100%'} width={'auto'} isClickToPauseDisabled={true}/>
                </div>
                Resgate seu prêmio aqui!
            </div> */}
            
            <Image src="/cm-corp-blue.svg" alt="logo" width={428.6} height={175.5}></Image>

            <h1>Soluções em Gamificação para:</h1>

            <div className={styles.links}>
                <Link href="https://chavemestra.net/corporativo/produtos/jogos-digitais#escape-hunter">
                    <a target="_blank" className="link"><Image src="/icons/target.svg" alt="icon target" width={30} height={30}/>Processos Seletivos</a>
                </Link>

                <Link href="https://chavemestra.net/corporativo/produtos/jogos-presenciais">
                    <a target="_blank" className="link"><Image src="/icons/team.svg" alt="icon team" width={30} height={30}/>Desenvolvimento de Equipes</a>
                </Link>

                <Link href="https://chavemestra.net/corporativo/produtos/jogos-digitais#fluxo-game">
                    <a target="_blank" className="link"><Image src="/icons/handshake.svg" alt="icon handshake" width={30} height={30}/>Onboarding</a>
                </Link>

                <Link href="https://chavemestra.net/gamificacao#o-que-fazemos">
                    <a target="_blank" className="link"><Image src="/icons/idea.svg" alt="icon idea" width={30} height={30}/>Outros</a>
                </Link>
            </div>
            
        </div>
    )
}