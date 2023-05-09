'use client'

import Image from 'next/image'
import Link from 'next/link'
import { listLinks } from './Navbar'
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Whatsapp from '../../public/whatsapp.svg'

const date = new Date()
const year = date.getFullYear()

export default function Footer() {
	const renderLinks = listLinks.map((link) => {
		return (
			<li
				key={link.label}
				className='delay-100 duration-300 hover:text-black/60'
			>
				<Link href={link.url}>{link.label}</Link>
			</li>
		)
	})

	return (
		<footer className='container mx-auto'>
			<div className='mt-8 flex flex-col items-center gap-4 md:ml-8 md:items-start 2xl:ml-[88px]'>
				<Link href='/'>
					<h1 className='text-3xl font-bold delay-100 duration-300 ease-in-out hover:text-black/60'>
						ProWorld
					</h1>
				</Link>
				<p className='w-3/4 text-center text-sm md:text-left lg:w-1/2'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Fuga provident ducimus cum, at nisi eligendi iure officiis
					nostrum odit impedit delectus quos rerum voluptatibus?
				</p>
			</div>
			<nav>
				<ul className='mb-12 mt-8 flex flex-col items-center gap-8 font-semibold md:ml-8 md:flex-row 2xl:mx-[88px]'>
					{renderLinks}
				</ul>
			</nav>
			<ul className={`flex justify-center gap-8`}>
				<li>
					<Link href='/'>
						<Image src={Facebook} alt='Facebook' />
					</Link>
				</li>
				<li>
					<Link href='/'>
						<Image src={Instagram} alt='Instagram' />
					</Link>
				</li>
				<li>
					<Link href='/'>
						<Image src={Whatsapp} alt='Instagram' />
					</Link>
				</li>
			</ul>
			<div className='mt-8 flex flex-col gap-4 text-center'>
				<span>ProWorld&reg; {year}</span>
				<span>Made with ❤️, Thiago</span>
			</div>
		</footer>
	)
}
