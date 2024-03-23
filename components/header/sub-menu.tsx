import Link from 'next/link'
import React from 'react'
import ic_email from '@/icons/email.svg'
import ic_twitter from '@/icons/twiiter.svg'
import ic_telegram from '@/icons/telegram.svg'
import Image from 'next/image'
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

const SubMenu = ({ active }: { active: boolean }) => {
    return (
        <div className={`${active ? "h-[440px]" : "h-0 opacity-0 pointer-events-none"} absolute top-[70px] z-20 left-0 transition-all ease-linear duration-150 w-full p-5 submenu`}>
            <ul className=' flex flex-col items-center'>
                {headers.map((item, index) => {
                    return (
                        <Link key={index} href={item.href}>
                            <li className='px-6 py-4 text-[#fff] font-semibold text-2xl' >{item.title}</li>
                        </Link>
                    )
                })}

            </ul>
            <div className='w-[168px] mx-auto'>
                <p className='text-[#8F9399] text-sm font-normal text-center mb-4'>Follow us</p>
                <div className='flex items-center justify-between gap-6'>
                    <Image src={ic_email} alt='email' className='w-10 h-10 min-w-10' />
                    <Image src={ic_twitter} alt='email' className='w-10 h-10 min-w-10' />
                    <Image src={ic_telegram} alt='email' className='w-10 h-10 min-w-10' />
                </div>
            </div>
            <p className='w-full h-[1px] bg-line my-4'></p>
            <p className='text-[#8F9399] text-base font-normal text-center'>©All rights reserved</p>
        </div>
    )
}

export default SubMenu