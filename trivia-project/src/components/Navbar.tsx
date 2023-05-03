import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { inter } from '@/pages/index'

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

export const renderLinks = listLinks.map((link) => {
    return (
        <li
            key={link.label}
            className="hover:text-black/60 delay-100 duration-300"
        >
            <Link href={link.url}>{link.label}</Link>
        </li>
    )
})

export const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Navbar() {
    return (
        <header className="container mx-auto">
            <div className="flex justify-between items-center m-8 overflow-hidden gap-8 xl:justify-around">
                <Link href="/">
                    <h1 className="text-3xl font-bold hover:text-black/60 delay-100 duration-300 ease-in-out">
                        ProWorld
                    </h1>
                </Link>
                <nav className="hidden xl:block text-lg font-semibold">
                    <ul className={`${poppins.className} flex gap-8`}>
                        {renderLinks}
                    </ul>
                </nav>
                <div className="hidden xl:block space-x-4">
                    <Link href="/">
                        <button className="bg-red-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-red-700 delay-200 duration-300 ease-in-out">
                            Sign up
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="bg-zinc-300 px-6 py-3 rounded-md text-black/50 font-semibold hover:bg-zinc-400 delay-200 duration-300 ease-in-out">
                            Sign in
                        </button>
                    </Link>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 cursor-pointer xl:hidden"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
        </header>
    )
}
