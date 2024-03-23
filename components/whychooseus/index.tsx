import React from "react";
import Box from "../button";
import Heading from "../heading";
import overlay from "@/images/whychooseus/overlay.png";
import grid from "@/images/whychooseus/grid-why.png";
import road from "@/images/whychooseus/road.png";
import logo from "@/images/whychooseus/Logo.png";
import number1 from "@/images/whychooseus/1.png";
import number2 from "@/images/whychooseus/2.png";
import number3 from "@/images/whychooseus/3.png";
import number4 from "@/images/whychooseus/4.png";
import Image from "next/image";
import Card from "./card";
import CardMobile from "./card-mobile";

const whyList = [
  {
    number: number1,
    des: "Many investment funds focus solely on funding without adding real value.",
  },
  {
    number: number2,
    des: "The two primary needs of any project: funding and marketing.",
  },
  {
    number: number3,
    des: "With DCA - We provide both investment and marketing support to investors across Vietnam and worldwide.",
  },
  {
    number: number4,
    des: "With full support from 3 major communities in Vietnam, we boast a network of over 100 KOLs and various communities of all sizes",
  },
];

const WhyChooseUs = () => {
  return (
    <main className="bg-[#000] py-[50px] relative px-4 lg:px-0 why-choose-us">
      <Image
        src={road}
        alt="road"
        className="absolute top-[40px] lg:top-0 left-1/2 -translate-x-1/2 w-[490px] h-[360px]"
      />

      <div className="w-full lg:w-[820px] mx-auto relative">
        <Box className="button mx-auto">
          <button>Why Choose Us</button>
        </Box>
        <Heading
          text="Why Choose Us?"
          className="text-[32px] lg:text-[48px] font-bold mt-6 mb-4"
        />
        <p className="description text-sm lg:text-base font-medium text-center">
          Our goal is to deliver genuine investment value and facilitate the
          continuous growth and expansion of projects.
        </p>
      </div>

      <div className="w-full lg:w-[1440px] lg:h-[700px] mx-auto relative mt-20">
        <Image
          src={overlay}
          alt="overlay"
          fill
          className="z-[2] hidden lg:block"
        />
        <Image src={grid} alt="grid" fill className="z-[1] hidden lg:block" />
        <div className="w-[120px] h-[120px] z-20 hidden lg:flex items-center justify-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000]">
          <Image src={logo} alt="logo" className="w-20 h-20" />
        </div>
        <div className="hidden w-[1094px] mx-auto pt-10 lg:grid grid-cols-2 gap-4 relative z-[10]">
          {whyList.map((card, index) => {
            return <Card key={index} number={card.number} des={card.des} isFirst={index ===0} />;
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
          {whyList.map((card, index) => {
            return (
              <CardMobile key={index} number={card.number} des={card.des} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default WhyChooseUs;
