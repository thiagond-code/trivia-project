import type { Metadata } from 'next'

export default function FactsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='container mx-auto'>
			<section className='flex flex-col items-center m-8 gap-12'>
				{children}
			</section>
		</main>
	)
}
