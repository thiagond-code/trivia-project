'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

type Link = {
	label: string
	url: string
}

type Links = Link[]

export const listLinks: Links = [
	{
		label: 'Home',
		url: '/',
	},
	{
		label: 'Trivia & Facts',
		url: '/facts',
	},
	{
		label: 'Challenge Yourself',
		url: '/play',
	},
	{
		label: 'Leaderboard',
		url: '/leaderboard',
	},
	{
		label: 'About the Quiz',
		url: '/about',
	},
]

export const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Navbar() {
	const router = usePathname()

	const renderLinks = listLinks.map((link) => {
		return (
			<li
				key={link.label}
				className={`${
					router === link.url &&
					'cursor-not-allowed text-gray-400 hover:text-gray-400'
				} delay-100 duration-300 hover:text-black/60`}
			>
				<Link
					href={link.url}
					className={`${router === link.url && 'cursor-not-allowed'}`}
				>
					{link.label}
				</Link>
			</li>
		)
	})

	return (
		<header className='container mx-auto'>
			<div className='m-8 flex items-center justify-between gap-8 overflow-hidden xl:justify-around'>
				<Link href='/'>
					<h1 className='text-3xl font-bold delay-100 duration-300 ease-in-out hover:text-black/60'>
						ProWorld
					</h1>
				</Link>
				<nav className='hidden text-lg font-semibold xl:block'>
					<ul className={`${poppins.className} flex gap-8`}>
						{renderLinks}
					</ul>
				</nav>
				<div className='hidden space-x-4 xl:block'>
					<Link href='/signup'>
						<button className='rounded-md bg-red-600 px-6 py-3 font-semibold text-white delay-200 duration-300 ease-in-out hover:bg-red-700'>
							Sign up
						</button>
					</Link>
					<Link href='/signin'>
						<button className='rounded-md bg-zinc-300 px-6 py-3 font-semibold text-black/50 delay-200 duration-300 ease-in-out hover:bg-zinc-400'>
							Sign in
						</button>
					</Link>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='h-12 w-12 cursor-pointer xl:hidden'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</div>
		</header>
	)
}
