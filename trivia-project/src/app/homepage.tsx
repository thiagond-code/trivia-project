'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Homepage() {
	const router = useRouter()
	return (
		<main className='container mx-auto'>
			<section className='mx-8 my-16 flex flex-col xl:mx-12 2xl:mx-[88px]'>
				<h1 className='text-5xl font-extrabold'>
					Seja muito bem vindo!
				</h1>
				<p
					className={`${inter.className} mb-9 mt-3 text-xl text-gray-400`}
				>
					Welcome again!
				</p>
				<div className='space-x-4'>
					<Link href='/signup'>
						<button className='rounded-md bg-red-600 px-6 py-3 font-semibold text-white delay-200 duration-300 ease-in-out hover:bg-red-700'>
							Sign up
						</button>
					</Link>
					<Link href='/login'>
						<button className='rounded-md bg-zinc-300 px-6 py-3 font-semibold text-black/50 delay-200 duration-300 ease-in-out hover:bg-zinc-400'>
							Log in
						</button>
					</Link>
				</div>
			</section>
			<hr />
		</main>
	)
}
