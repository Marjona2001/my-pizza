import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Main_one from "../MainOne/MainOne";


const SwiperSlideComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      draggable={true}
    >
      <SwiperSlide>
        <div className="swiper-content"><Main_one /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-content"><Main_one /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-content"><Main_one /></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlideComponent;
