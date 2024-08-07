"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {

    const sidebarLinks = [""]

    const pathName = usePathname();

    return (
        <section className='sticky bg-blackish left-0 top-0 flex flex-col h-[120vh] w-fit justify-between bg-palette-2 p-6 pt-28 hidden text-palette-4  md:block md:w-[25%]'>
            <div className='flex flex-col gap-6'>
                {sidebarLinks.map((link) => {

                    return (
                        // <Link href={link.route} key={link.label} className='flex gap-3 items-center p-4 text-white rounded-lg font-bold justify-start ' style={pathName === link.route || pathName.startsWith(`${link.route}/`) ? { backgroundImage: "linear-gradient(to right, #AD6EFB , #FFA66C)" } : { backgroundImage: "" }}>
                        //     <Image src={link.imgUrl} alt={link.label} width={22} height={22} />
                        <p className='hidden md:block'>{link}</p>
                        // </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar