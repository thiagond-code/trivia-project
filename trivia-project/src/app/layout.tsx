import '@/styles/globals.css'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
}

export default function RootLayout({

    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages

    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <html lang="pt-BR">
        <body>
            <Navbar />
            {children}
            <Footer />
        </body>
      </html>
    );
  }