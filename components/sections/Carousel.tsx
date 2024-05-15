import React, { useRef, useState } from "react";
import Image from "next/image";
import iphone from "../../assets/iphone/Iphone-slider.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <Swiper
      style={{
        marginTop: 200,
      }}
      autoHeight={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <Image src={iphone} alt="s" style={{ width: "100%", height: "50vh" }} />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={iphone} alt="s" style={{ width: "100%", height: "50vh" }} />
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={iphone}
          alt="s"
          style={{
            width: "100%",
            height: "50vh",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
