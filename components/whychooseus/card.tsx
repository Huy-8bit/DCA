import { animation } from '@/conts';
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image';
import React from 'react'
import light from '@/images/whychooseus/light.png'


interface PropsCard {
    number: StaticImport;
    des: string;
    isFirst?: boolean;
}

const Card = ({number, des, isFirst}:PropsCard) => {
  return (
      <div className={`w-full h-[275px] lg:p-10 group overflow-hidden cursor-pointer relative flex justify-center flex-col hover:border hover:border-[#fff6d6] ${animation} `}>
          <div className={`group-hover:translate-x-0 ${isFirst ? 'translate-x-[200%]' : 'translate-x-[200%]'} w-fit ${animation}`}>
              <Image
                  className='mx-auto'
                  src={number} alt="1" />
              <p className={`w-[100px] h-1 bg-gradient-retangle mt-4 mb-6`}></p>
          </div>
          
          
          <p className="text-[#fff] text-sm font-normal text-center">
              {des}
          </p>
          <Image src={light} alt='light' className={`absolute top-0 left-0 h-full opacity-0 group-hover:opacity-100 ${animation}`} />
      </div>
  )
}

export default Card