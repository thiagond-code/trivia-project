import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'Home | ProWorld',
	description: 'Welcome to ProWorld',
}

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages

	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='pt-BR'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
