import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import light from '@/images/whychooseus/light.png'

interface Props {
  icon: StaticImport;
  title?: string;
}

const ItemMobile = ({ icon, title }: Props) => {
  return (
    <div className="w-full h-[170px] backer-item relative overflow-hidden">
          <div className="relative z-10 flex flex-col gap-4 items-center justify-center w-full h-full">
              <Image src={icon} alt="icon1" />
              <p className="title text-xl font-medium">{title}</p>
          </div>
          <Image src={light} alt='light' className='absolute top-0 left-0' />
    </div>
  );
};

export default ItemMobile;
