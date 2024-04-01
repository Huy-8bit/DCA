'use client'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardProject from './card'
import zkasino from '@/images/portfolio/Items.png'
import earlyfans from '@/images/portfolio/Items (1).png'
import solstorm from '@/images/portfolio/Items (2).png'
import ordify from '@/images/portfolio/Items (3).png'
import Minterest from '@/images/portfolio/Items (4).png'
import Solak from '@/images/portfolio/Items (5).png'
import Interlock from '@/images/portfolio/Items (7).png'
import AutoAir_Ai from '@/images/portfolio/Items (8).png'
import KIP from '@/images/portfolio/Items (9).png'
import Bac_Games from '@/images/portfolio/Items (10).png'
import Bitcoin_Virtual from '@/images/portfolio/Items (11).png'
import "swiper/css";
import "swiper/css/pagination";

const projects = [
    {
        icon: zkasino,
        title: 'Zkasino'
    },
    {
        icon: earlyfans,
        title: 'Early Fans'
    },
    {
        icon: solstorm,
        title: 'Solstorm'
    },
    {
        icon: ordify,
        title: 'Ordify'
    },
    {
        icon: Minterest,
        title: 'Minterest'
    },
    {
        icon: Solak,
        title: 'Solak'
    },
    {
        icon: Interlock,
        title: 'Interlock'
    },
    {
        icon: AutoAir_Ai,
        title: 'AutoAir Ai'
    },
    {
        icon: KIP,
        title: 'KIP'
    },
    {
        icon: Bac_Games,
        title: 'Bac Games'
    },
    {
        icon: Bitcoin_Virtual,
        title: 'Bitcoin Virtual Machine'
    },
]

const PortfolioSlide = () => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-8 h-[200px]"
        >
            {projects.map((project, index) => {
                return (
                    <SwiperSlide key={index} className='px-4'>
                        <CardProject icon={project.icon} title={project.title} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default PortfolioSlide