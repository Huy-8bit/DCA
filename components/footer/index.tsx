import React from 'react'
import ic_logo from '@/icons/logo.svg'
import ic_email from '@/icons/email.svg'
import ic_twitter from '@/icons/twiiter.svg'
import ic_telegram from '@/icons/telegram.svg'
import Image from 'next/image'

const Footer = ({ isAbsolute }: { isAbsolute?: boolean }) => {
  return (
    <main className={`w-full lg:w-[1040px] mx-auto px-4 lg:px-0 h-[183px] ${isAbsolute ? 'absolute bottom-40 lg:bottom-0 left-1/2 -translate-x-1/2' : 'relative z-20'}`}>
      <div className='hidden lg:block'>
        <section className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <Image src={ic_logo} alt='logo' className='w-8 h-8 min-w-8' />
            <span className='text-base font-bold text-[#FDBB49]'>DEGEN CAPITAL AUTHENTIC </span>
          </div>
          <ul className='flex items-center gap-10'>
            <span className='text-base font-medium text-[#FFFFFF]'>help@dca.com</span>
            <span className='text-base font-medium text-[#FFFFFF]'>Terms & Conditions</span>
            <span className='text-base font-medium text-[#FFFFFF]'>Privacy Policy</span>
          </ul>
        </section>
        <p className='w-full h-[1px] bg-line_footer mt-4'></p>
        <section className='flex items-center justify-between mt-4'>
          <p className='text-[#8F9399] text-sm font-normal text-center'>All rights reserved</p>
          <div className='flex items-center justify-between gap-6'>
            <Image src={ic_email} alt='email' className='w-10 h-10 min-w-10' />
            <Image src={ic_twitter} alt='email' className='w-10 h-10 min-w-10' />
            <Image src={ic_telegram} alt='email' className='w-10 h-10 min-w-10' />
          </div>
        </section>
      </div>
      <div className=' lg:hidden flex flex-col gap-4'>
        <div className='flex flex-col items-center space-x-3'>
          <Image src={ic_logo} alt='logo' className='w-8 h-8 min-w-8' />
          <span className='text-base font-bold text-[#FDBB49]'>DEGEN CAPITAL AUTHENTIC </span>
        </div>
        <div className='flex items-center justify-between gap-6'>
          <Image src={ic_email} alt='email' className='w-10 h-10 min-w-10' />
          <Image src={ic_twitter} alt='email' className='w-10 h-10 min-w-10' />
          <Image src={ic_telegram} alt='email' className='w-10 h-10 min-w-10' />
        </div>
        <ul className='flex items-center justify-between'>
          <span className='text-sm font-medium text-[#FFFFFF]'>help@dca.com</span>
          <span className='text-sm font-medium text-[#FFFFFF]'>Terms & Conditions</span>
          <span className='text-sm font-medium text-[#FFFFFF]'>Privacy Policy</span>
        </ul>
        <p className='w-full h-[1px] bg-line_footer mt-4'></p>
        <p className='text-[#8F9399] text-sm font-normal text-center'>All rights reserved</p>

      </div>
    </main>
  )
}

export default Footer