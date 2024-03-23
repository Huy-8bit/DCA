"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ItemMobile from "./backer-item-mobile";
import icon1 from "@/images/backers/Items.svg";
import icon2 from "@/images/backers/Items (1).svg";
import icon3 from "@/images/backers/Items (2).svg";

const Slider = () => {
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
      <SwiperSlide>
        <ItemMobile icon={icon1} title="AZCOINVEST" />
      </SwiperSlide>
      <SwiperSlide>
        <ItemMobile icon={icon2} title="RL" />
      </SwiperSlide>
      <SwiperSlide>
        <ItemMobile icon={icon3} title="DUCK CRYPTO" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
