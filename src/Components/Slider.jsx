import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "../img/slide1.webp";
import slide2 from "../img/slide2.webp";
import slide3 from "../img/slide3.webp";
import slide4 from "../img/slide4.webp";
import "./slider.css"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <div className="containerr white-blur-shadow">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide >
          <img src={slide1} alt="Slide 1" className="-z-10 lg:w-80"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" className="-z-10 lg:w-80"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" className="-z-10 lg:w-80"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Slide 4" className="-z-10 lg:w-80"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
