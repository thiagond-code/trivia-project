import Link from 'next/link'


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
        url: '/',
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

export default function Navbar() {
    return (
        <header>
            <h1>ProWorld</h1>
            <nav>
                <ul>
                   {renderLinks}
                </ul>
            </nav>
            <button>Sign in</button>
            <button>Sign up</button>
        </header>
    )
}