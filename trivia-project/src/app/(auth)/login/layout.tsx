import React from 'react'

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<h1 className='text-3xl font-bold'>Log in</h1>
			{children}
		</>
	)
}
