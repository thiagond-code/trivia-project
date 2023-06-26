import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sign up',
}

export default function SignUpLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<h1 className='text-3xl font-bold'>Sign up</h1>
			{children}
		</>
	)
}
