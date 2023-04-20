import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { inter } from '@/pages/index'

export type Link = {
    label: string
    url: string
}

export type Links = Link[]

export const listLinks: Links = [
    {
        label: 'Home',
        url: '/'
    },
    {
        label: 'Trivia & Facts',
        url: '/facts',
    },
    {
        label: 'Challenge Yourself',
        url: '/play'
    },
    {
        label: 'Leaderboard',
        url: '/leaderboard'
    },
    {
        label: 'About the Quiz',
        url: '/about'
    }
]

export const renderLinks = listLinks.map((link) => {
    return (
        <li key={link.label}>
            <Link href={link.url}>{link.label}</Link>
        </li>
    )
})

export const poppins = Poppins({weight: "500", subsets: ['latin']})

export default function Navbar() {
    return (
        <header className='flex justify-between items-center overflow-hidden m-10 md:justify-around'>
            <Link href='/'>
                <h1 className='text-3xl font-bold'>ProWorld</h1>
            </Link>
            <nav className='hidden lg:block text-lg font-semibold'>
                <ul className={`${poppins.className} flex gap-10`}>
                   {renderLinks}
                </ul>
            </nav>
            <div className='hidden lg:block space-x-5 '>
                <Link href='/'>
                    <button>Sign in</button>
                </Link>
                <Link href='/'>
                    <button>Sign up</button>
                </Link>
                <div className='block lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

        </header>
    )
}