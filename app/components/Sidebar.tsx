"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Sidebar = () => {

    const sidebarLinks = [""]

    const pathName = usePathname();

    return (
        <section className='sticky bg-blackish left-0 top-0 flex flex-col h-[120vh] w-fit justify-center items-center bg-palette-2 p-6 hidden text-palette-4  md:block md:w-[5%]'>

            <div className=' h-[100vh] text-white rounded-xl flex flex-col gap-8 text-orange justify-center items-center text-4xl group duration-150'>
                <Link href={"https://github.com/KartikChinda/musicMonthly"} className='hover:text-5xl duration-150'> <FaGithubSquare /></Link>
                <Link href={"https://twitter.com/ChindaKartik"} className='hover:text-5xl duration-150'> <FaSquareXTwitter /></Link>
                <Link href={"https://www.linkedin.com/in/kartikchinda"} className='hover:text-5xl duration-150'> <FaLinkedin /></Link>
                <Link href={"https://www.instagram.com/kartik.chinda11"} className='hover:text-5xl duration-150'> <TiSocialInstagram /></Link>
            </div>




        </section>
    )
}

export default Sidebar