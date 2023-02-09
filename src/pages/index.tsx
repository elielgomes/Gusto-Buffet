import Head from 'next/head'
import {
	Navbar,
	MainBanner,
	About,
	Partner,
	Reference,
	Galery,
	Slider,
	Team,
} from '@/components'

export default function Home() {
	return (
		<>
			<Head>
				<title>Gusto Gastronomia</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="assets/gusto-icon.png" />
			</Head>
			<Navbar />
			<main>
				<MainBanner />
			</main>
			<section>
				<Partner />
			</section>
			<section>
				<About />
			</section>
			<section>
				<Reference />
			</section>
			<section>
				<Galery />
			</section>
			<section>
				<Team/>
			</section>
		</>
	)
}
