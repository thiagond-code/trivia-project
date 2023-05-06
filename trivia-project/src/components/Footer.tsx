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
				className='hover:text-black/60 delay-100 duration-300'
			>
				<Link href={link.url}>{link.label}</Link>
			</li>
		)
	})

	return (
		<footer className='container mx-auto'>
			<div className='flex flex-col items-center mt-8 gap-4 md:items-start md:ml-8 2xl:ml-[88px]'>
				<Link href='/'>
					<h1 className='text-3xl font-bold hover:text-black/60 delay-100 duration-300 ease-in-out'>
						ProWorld
					</h1>
				</Link>
				<p className='text-sm text-center w-3/4 md:text-left lg:w-1/2'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Fuga provident ducimus cum, at nisi eligendi iure officiis
					nostrum odit impedit delectus quos rerum voluptatibus?
				</p>
			</div>
			<nav>
				<ul className='flex flex-col items-center mt-8 mb-12 gap-8 font-semibold md:flex-row md:ml-8 2xl:mx-[88px]'>
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
			<div className='flex flex-col text-center mt-8 gap-4'>
				<span>ProWorld&reg; {year}</span>
				<span>Made with ❤️, Thiago</span>
			</div>
		</footer>
	)
}
