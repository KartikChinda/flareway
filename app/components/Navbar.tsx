import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between   w-full px-6 py-4 lg:px-10 bg-palette-2 text-palette-4 bg-blackish'>
            <Link href="/" className='flex items-center gap-2'>
                <p className='text-5xl py-1 font-extrabold text-palette-4 hidden md:block font-heading text-white '>FlareWay</p>
            </Link>
        </nav>
    )
}

export default Navbar