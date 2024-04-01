import React from 'react'
import bgCardProject from '@/images/portfolio/card.png'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface Props {
    icon: StaticImport;
    title: string;
}

const CardProject = ({ icon, title }: Props) => {
    return (
        <div className='w-full h-[200px] lg:h-[160px] relative justify-self-center overflow-hidden flex items-center justify-center'>
            <Image src={bgCardProject} alt='card' fill priority />
            <p className='relative flex flex-col items-center'>
                <Image src={icon} alt='icon' />
                <span className='title'>{title}</span>
            </p>
        </div>
    )
}

export default CardProject