import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import React from 'react'
import light from '@/images/whychooseus/light.png'

interface PropsCard {
    number: StaticImport;
    des: string;
}
const CardMobile = ({ number, des }: PropsCard) => {
  return (
      <div className="card-mobile w-full h-[213px] relative">
          <div className='flex items-start p-6 gap-4 flex-col relative z-10'>
              <Image src={number} alt="1" />
              <p className="w-[100px] h-1 bg-gradient-retangle"></p>
              <p className="text-[#fff] text-sm font-normal text-left">
                  {des}
              </p>
          </div>
          
          <Image src={light} alt='light' className='absolute top-0 left-0'/>
      </div>
  )
}

export default CardMobile