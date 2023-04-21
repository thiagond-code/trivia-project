import Image from 'next/image'
import { renderLinks } from "./Navbar"

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
            <Image src='../public/facebook.svg' alt=''/>
        </footer>
    )
}