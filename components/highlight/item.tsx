import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import card from '@/images/hightlight/Card.png'
import Image from 'next/image';
import hover from '@/images/hightlight/card_hover.png'



interface Props{
    icon: StaticImport;
    iconHover: StaticImport;
    title: string;
    des: string;
}

const HighLightItem = ({icon,title,des,iconHover}:Props) => {
  return (
      <div className='w-full h-[267px] group cursor-pointer relative flex flex-col items-center justify-center px-[10px] lg:px-0'>
          <Image src={card} alt='card' fill priority />
          <div className='relative flex flex-col items-center gap-3'>
              <Image src={icon} alt='icon' className='opacity-1 group-hover:opacity-0 transition-all ease-linear duration-200' />
              <Image src={iconHover} alt='icon' className='absolute top-[-3px] opacity-0 group-hover:opacity-100 transition-all ease-linear duration-200' />
              <p className='text-base lg:text-lg text-[#fff] font-medium text-center'>{title} </p>
              <p className='text-sm font-normal text-[#8F9399] text-center mt-3 lg:group-hover:translate-x-10 transition-all ease-linear duration-200'>{des}</p>
          </div>
          <Image src={hover} alt='' className='top-0 left-0 absolute opacity-0 group-hover:opacity-100 transition-all ease-linear duration-200'/>
      </div>
  )
}

export default HighLightItem