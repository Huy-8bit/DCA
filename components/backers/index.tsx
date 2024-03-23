import React from 'react'
import Box from '../button'
import backer from '@/images/backers/Grid.png'
import Heading from '../heading'
import icon1 from '@/images/backers/Items.svg'
import icon2 from '@/images/backers/Items (1).svg'
import icon3 from '@/images/backers/Items (2).svg'
import Image from 'next/image'
import Slider from './slider'

const Backer = () => {
    return (
        <div className='w-full bg-[#000] px-4 lg:px-0 py-20 lg:py-0 backers'>
            <div className='w-full lg:w-[1172px] mx-auto'>
                <Box className='button mx-auto'>
                    <button>Backers</button>
                </Box>
                <Heading className='mt-6 text-[48px] font-bold' text='Backers' />
                <div className='hidden lg:flex items-center justify-between gap-10 mt-6 w-[1172px] mx-auto'>
                    <div className='w-[346px] h-[196px] relative'>
                        <div className='relative flex flex-col gap-4 items-center justify-center w-full h-full'>
                            <Image src={icon1} alt='icon1' />
                            <p className='title text-xl font-medium'>AZCOINVEST</p>
                        </div>
                        <Image src={backer} alt='backer' fill priority />
                    </div>
                    <div className='w-[346px] h-[196px] relative'>
                        <div className='relative flex flex-col gap-4  items-center justify-center w-full h-full '>
                            <Image src={icon2} alt='icon1' />
                            <p className='title text-xl font-medium'>RL</p>
                        </div>
                        <Image src={backer} alt='backer' fill priority />
                    </div>
                    <div className='w-[346px] h-[196px] relative'>
                        <div className='relative flex flex-col gap-4 items-center justify-center w-full h-full '>
                            <Image src={icon3} alt='icon1' />
                            <p className='title text-xl font-medium'>DUCK CRYPTO</p>
                        </div>
                        <Image src={backer} alt='backer' fill priority />
                    </div>
                </div>
                <p className='title text-center mt-6 text-base leading-6 lg:text-[24px] font-medium'>Over 100 KOLs and more than 1000 communities in Vietnam.</p>
                <Slider />
            </div>

            <div className='w-full lg:w-[600px] h-[326px] mx-auto video'>
                <video
                    className="h-full w-full mx-auto object-cover mix-blend-multiply"
                    src="images/portfolio/earth.webm"
                    typeof='video/webm'
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
            </div>


        </div>
    )
}

export default Backer