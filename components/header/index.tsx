'use client'
import React, { useState } from 'react'
import logo from '@/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ic_hamburger from '@/icons/ic-bugger.svg'
import SubMenu from './sub-menu'

const headers = [
    {
        id: 1,
        title: 'Portfolio',
        href: '/portfolio'
    },
    {
        id: 2,
        title: 'Contact',
        href: '/contact'
    },
    {
        id: 3,
        title: 'Get in touch',
        href: '/contact'
    },

]

const Header = () => {
    const [active, setActive] = useState(false);

    const pathname = usePathname();


    return (
        <div className='navbar z-50 absolute top-4 left-1/2 w-full md:w-[561px] h-[64px] py-4 px-8 -translate-x-1/2 z-10 flex items-center justify-between gap-[64px]'>
            <Link href={'/'}>
                <Image src={logo} alt='logo' className='w-10 h-10 min-w-10' />
            </Link>
            <ul className='hidden lg:flex items-center justify-between grow'>
                {
                    headers.map((nav, index) => {
                        return (
                            <Link href={nav.href} key={index}>
                                <li className={`${nav.href === pathname && 'border border-[#292929] rounded-[100px]'} text-[#fff] text-base font-medium py-3 px-6`}>{nav.title}</li>
                            </Link>
                        )
                    })
                }
            </ul>
            <Image onClick={() => { setActive(!active) }} className='block lg:hidden' src={ic_hamburger} alt='icon' width={32} height={32} />
            <SubMenu active={active} />
        </div>
    )
}

export default Header