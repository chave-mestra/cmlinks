import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo_yellow.svg';
import { EscapeDoor } from '../lib/icons';

export default function Escape() {
	return (
		<div className="container">
			<Head>
				<title>Chave-Mestra Escape Game</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main>
				<div className="logo-wrapper">
					<Image src={Logo} layout="fill" className="logo" />
				</div>

				<Link href="https://www.instagram.com/chavemestragramado/">
					<h1>@chavemestragramado</h1>
				</Link>

				<div className="grid">
					<Link
						className="link midnight"
						href="https://lp.chavemestra.net/midnight"
						target="_blank"
					>
						<EscapeDoor className="escapeDoor" />
						<span>Midnight Escape</span>
					</Link>
					<Link className="link" href="http://www.chavemestra.net/">
						Site Chave-Mestra
					</Link>

					<Link
						className="link"
						href="https://api.whatsapp.com/send?1=pt_BR&phone=5551992337112"
					>
						Whatsapp
					</Link>

					<Link
						className="link"
						href="http://www.instagram.com/chavemestracorp"
					>
						Jogos Corporativos
					</Link>
				</div>
			</main>
		</div>
	);
}
