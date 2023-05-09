import type { Metadata } from 'next'

export default function FactsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='container mx-auto'>
			<section className='m-8 flex flex-col items-center gap-12'>
				{children}
			</section>
		</main>
	)
}
