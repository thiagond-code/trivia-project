export default function LoginLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <main className='flex flex-col items-center gap-8'>{children}</main>
}
