import React from 'react'
import skin from '@/images/banner/skin.png'
import star from '@/images/banner/star.png'
import Image from 'next/image'
import Button from '../button'
import Box from '../button'
import Heading from '../heading'
import Title from '../heading/title'
import ButtonSecondary from '../button/btn-secondary'

const Banner = () => {
    return (
        <main className='w-full h-screen bg-[#000] relative px-4 lg:px-0'>
            <div className='w-full lg:max-w-[1440px] h-full mx-auto banner'>
                <video
                    className="h-full w-full mx-auto object-cover mix-blend-luminosity"
                    src="images/banner/speed-light.webm"
                    typeof='video/webm'
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
                <div className='w-full lg:w-[682px] relative z-10 content flex flex-col items-center gap-8'>
                    <Box className='button'>
                        <button>Introduction</button>
                    </Box>
                    <div>
                        <Heading text='Degen Capital Authentic' className='mb-4 lg:text-[64px] text-[32px]' />
                        <Title text='The First VC Evolution' className='lg:text-[64px] px-4 lg:px-0 text-[32px] tracking-[-0.96px] lg:tracking-[-1.96px] text-center'/>
                    </div>
                    <p className='text-[#fff] px-4 opacity-50 font-medium text-sm lg:text-base w-full lg:w-[640px] mx-auto text-center'>Powered by communities, revolutionizes traditional venture capital models by prioritizing community engagement and collaboration throughout the investment process.</p>
                    <div className='w-fit'>
                        <ButtonSecondary text='Get Started' />
                    </div>
                </div>
            </div>

            <Image src={skin} alt='skin' priority className='absolute bottom-0 left-1/2 -translate-x-1/2 mix-blend-lighten' />
            <Image src={star} alt='start' className='absolute w-full h-full top-0 left-0' />
        </main>
    )
}

export default Banner