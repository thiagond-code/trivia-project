import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

function Hero() {
	return (
		<main className='container mx-auto'>
			<section className='flex flex-col mx-8 my-16 xl:mx-12 2xl:mx-[88px]'>
				<h1 className='text-5xl font-extrabold'>
					Seja muito bem vindo!
				</h1>
				<p
					className={`${inter.className} text-xl text-gray-400 mt-3 mb-9`}
				>
					Welcome again!
				</p>
				<div className='space-x-4'>
					<Link href='/signup'>
						<button className='bg-red-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-red-700 delay-200 duration-300 ease-in-out'>
							Sign up
						</button>
					</Link>
					<Link href='/signin'>
						<button className='bg-zinc-300 px-6 py-3 rounded-md text-black/50 font-semibold hover:bg-zinc-400 delay-200 duration-300 ease-in-out'>
							Sign in
						</button>
					</Link>
				</div>
			</section>
			<hr />
		</main>
	)
}

export default function Home() {
	return (
		<>
			<Hero />
		</>
	)
}
