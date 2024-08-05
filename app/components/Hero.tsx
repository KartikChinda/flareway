"use client";
import React from 'react'
import Link from 'next/link';

const Hero = () => {
    return (
        <div className=' h-full flex flex-col gap-4 font-text justify-center items-start px-8  text-4xl font-heebo'>
            <h2>Bright futures,</h2>
            <h1 ><span className='font-extrabold text-6xl'>enlightened </span>and unlocked </h1>
            <h2>by you.</h2>
            <h2 className='text-xl font-light'>
                With every passing second, minute, and hour on this clock, we try to connect a bright mind with the resources they need to thrive.
                <br /><br />
                Go ahead, click the link below, and be a part of our community today.
            </h2>

            <div className='flex gap-4'>
                <Link href="/students" className='mt-8 rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-2xl hover:bg-blackish border-2 border-blackish duration-150 hover:text-white hover:text-[26px]'>
                    I have resources.
                </Link>
                <Link href="/new" className='mt-8 rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-2xl hover:bg-blackish border-2 border-blackish duration-150 hover:text-white hover:text-[26px]'>
                    I need resources.
                </Link>
            </div>






        </div>
    )
}

export default Hero