import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

export const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section>
        <h1 className='mt-12 mb-3 text-5xl font-extrabold'>Seja muito bem vindo!</h1>
        <p className={`${inter.className} text-xl text-gray-400 mb-9`}>Welcome again!</p>
        <div className='space-x-5'>
          <Link href='/'>
            <button className='bg-red-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-red-700 delay-200 duration-300 ease-in-out'>Sign up</button>
          </Link>
          <Link href='/'>
            <button className='bg-zinc-300 px-6 py-3 rounded-md text-black/50 font-semibold hover:bg-zinc-400 delay-200 duration-300 ease-in-out'>Sign up</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
