import Image from 'next/image'
import { renderLinks } from "./Navbar"
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Whatsapp from '../../public/whatsapp.svg'

const date = new Date()
const year = date.getFullYear()

export default function Footer() {
    return (
        <footer className='container'>
            <div className='flex flex-col'>
                <Image src="/../../public/mario.png" width={100} height={100} alt='Logo oficial'/>
                <p className='text-sm w-1/2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Fuga provident ducimus cum, at nisi eligendi iure officiis nostrum odit impedit delectus quos rerum voluptatibus?
                </p>
            </div>
            <nav>
                <ul>{renderLinks}</ul>
            </nav>
                <ul className='flex justify-center gap-8'>
                    <li>
                        <Image src={Facebook} alt='Facebook'/>
                    </li>
                    <li>
                        <Image src={Instagram} alt='Instagram'/>
                    </li>
                    <li>
                        <Image src={Whatsapp} alt='Instagram'/>
                    </li>
                </ul>
                <div className='flex flex-col text-center mt-4 gap-2'>
                    <span>ProWorld&reg; {year}</span>
                    <span>Made with ❤️, Thiago</span>
                </div>
        </footer>
    )
}